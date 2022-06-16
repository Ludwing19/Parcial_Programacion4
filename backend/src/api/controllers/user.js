import { request, response } from "express"; 
import { genSalt, hash, compare } from "bcrypt";

import { pool } from "../../dal/context";
import { GenerateJWT } from "../../helpers/jwt";
export class UserController {
  async create(req = request, res = response) {
    const payload = await this._userService.CreateUser(req.body);
    res.status(payload.statusCode || 201).json({ payload });
  }

  async getAll(req = request, res = response) {
    const { rows } = await pool.query("SELECT CURRENT_DATE");
    const payload = req.payload;
    res.status(200).json({ payload, rows });
  }
  async getOne(req, res) {
    const { id } = req.params;
    const payload = await this._userService.FindOne(id);
    res.status(payload.statusCode || 200).json({ payload });
  }

  async update(req, res) {
    const { id } = req.params;
    const payload = await this._userService.UpdateUser(id, req.body);
    res.status(payload.statusCode || 200).json({ payload });
  }

  async delete(req, res) {
    res.status(200).json({ delete: "delete" });
  }




                                //Iniciar sesion
  async signin(req, res) {
    try {//Se extrae la contra y el usuario y se compureba que los campos no esten vacios
      const { password, username } = req.body;
      if (!password || !username)
        
        //Si no hay datos se manda un error
        return res.status(400).json({
          "Bad Request": `Password and username are required`,
        });
      //Aqui valida que el usuario ingresado ya es existente o no
      const { rows } = await pool.query(
        `SELECT * FROM public.users WHERE "Username" = $1`,
        [username]
      );







        //aqui estamos validando que los datos ingresados al iniciar sesion sean correctos
      //caso contrario nos dara un error 400 que no existe en la BD
      
      if (rows.length < 1)
        return res.status(400).json({ result: "user or password incorrect" });
      const Ispassword = await compare(password, rows[0].Password);
      if (!Ispassword)
        return res.status(400).json({ result: "user or password incorrect" });

      //jwt lo que hace es generar un backlog y este lo retorna al token y lo manda al frontend
      const token = await GenerateJWT({
        Id: rows[0].Id,
        username: rows[0].Username,
      });

      res.status(200).json({ result: { token, Id: rows[0].Id } });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ error: ex });
    }
  }



//Funcion para ingresar un usuario nuevo
  async signup(req, res) {
    try {
      const { name, lastname, password, username } = req.body;
      if (!name || !password || !username)
        return res.status(400).json({
          "Bad Request": `name, password and username are required`,
        });
      //Aqui lo que se hace es encriptar las contraseña
      const salt = await genSalt(10);
      const passwordEncryt = await hash(password, salt);
      const { rows } = await pool.query(
        `INSERT INTO public.users( "Name", "LastName", "Username", "Password") VALUES ($1, $2, $3, $4) RETURNING *`,
        [name, lastname, username, passwordEncryt]
      );
      const token = await GenerateJWT({
        Id: rows[0].Id,
        username: rows[0].Username,
      });
      //Si todo es correcto nos deja pasar
      res.status(200).json({ result: { token, Id: rows[0].Id } });
    } catch (ex) {
      console.log(ex);
      //Si no muestra un error de servidor
      res.status(500).json({ error: ex });
    }
