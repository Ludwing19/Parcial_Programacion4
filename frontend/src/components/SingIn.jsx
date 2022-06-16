import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { FieldError } from "./FieldError";
import { API_URL_LOGIN } from "../utils/constans";
import { LoginContext } from "../LoginContext";

async function _handleSubmit(values) {
  try {
    return await (
      await axios.post(API_URL_LOGIN(), values)
    ).data.result;
  } catch (ex) {
    return false;
  }
}

export const SingIn = () => {
  const [, setContext] = useContext(LoginContext);
  const [error, setError] = useState("none");
  const navigate = useNavigate("/");
  return (
    <>
      <div className="col-md-4">
        <h2 className="col-12">Iniciar sesion</h2>
        <Formik
          initialValues={{
            password: "",
            username: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("El usuario es requerida"),
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
              <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <Field
                  name="username"
                  className="form-control"
                  placeholder="username"
                />
                <FieldError field="username"></FieldError>
                <label htmlFor="password">Contraseña</label>
                <Field
                  name="password"
                  className="form-control"
                  placeholder="password"
                />
                <FieldError field={"password"}></FieldError>
                <div className="text-danger" style={{ display: error }}>
                  Eror al iniciar sesion
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
