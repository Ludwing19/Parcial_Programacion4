import { request, response } from "express";
import { pool } from "../../dal/context";
export class StarsController {
  async create(req = request, res = response) {
    try {
      const { Title, Description, url } = req.body;
      const { rows } = await pool.query(
        `INSERT INTO public."Information"( "Title", "Description", img_url, "Type") VALUES ($1, $2, $3, 'stars') RETURNING *`,
        [Title, Description, url]
      );

      res.status(201).json({ result: rows[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }

  async getAll(req, res) {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM public."Information" WHERE "Type" = 'stars'`
      );
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const { rows } = await pool.query(
        `SELECT * FROM public."Information" WHERE "Type" = 'stars' AND "Id" = $1`,
        [id]
      );
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const payload = await this._userService.UpdateUser(id, req.body);
    res.status(payload.statusCode || 200).json({ payload });
  }

  async delete(req, res) {
    res.status(200).json({ delete: "delete" });
  }
}
