import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { FieldError } from "./FieldError";
import { API_URL_SIGNUP } from "../utils/constans";
import { LoginContext } from "../LoginContext";

async function _handleSubmit(values) {
  try {
    return await (
      await axios.post(API_URL_SIGNUP(), values)
    ).data.result;
  } catch (ex) {
    return false;
  }
}

export const SingUp = () => {
  const [, setContext] = useContext(LoginContext);
  const [error, setError] = useState("none");
  const navigate = useNavigate("/");
  return (
    <>
      <div className=" offset-md-4 col-md-4">
        <h2 className="col-12">Crear Cuenta</h2>
        <Formik
          initialValues={{
            password: "",
            name: "",
            username: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("El usuario es requerida"),
            name: Yup.string().required("El nombre es requerido"),
            password: Yup.string().required("La contraseña es requerida"),
          })}
          onSubmit={async (values) => {
            const user = await _handleSubmit(values);
            if (!user) {
 setError("block");
             
            } else {
              localStorage.setItem("user", JSON.stringify(user));
             
              setContext(user);
               navigate("/");
            }
          }}
        >
          {(formikProps) => (
            <Form className="col-12">
              <label htmlFor="name">Nombre</label>
              <div className="form-group">
                <Field
                  name="name"
                  className="form-control"
                  placeholder="Nombre"
                />
                <FieldError field={"name"}></FieldError>
                <label htmlFor="username">Usuario</label>
                <Field
                  name="username"
                  className="form-control"
                  placeholder="nombre de usuario"
                />
                <FieldError field="username"></FieldError>
                <label htmlFor="password">Contraseña</label>
                <Field
                  name="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
                <FieldError field={"password"}></FieldError>
                <div className="text-danger" style={{ display: error }}>
                  Eror crear cuenta
                </div>
                <button
                  disabled={formikProps.isSubmitting}
                  className="btn btn-light"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
