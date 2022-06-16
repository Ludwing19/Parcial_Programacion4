import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { FieldError } from "./FieldError";
import {
  API_URL_CONSTELLATIONS,
  API_URL_PLANETS,
  API_URL_STARS,
  HEADERS_AUTH,
} from "../utils/constans";

async function _handleSubmit(values, url) {
  try {
    const user= JSON.parse(localStorage.getItem('user'))
    await axios.post(url, values, HEADERS_AUTH(user.token));
    return true;
  } catch (ex) {
    return false;
  }
}



export const CreateStellar = () => {
  const history = useNavigate("/");
  return (
    <>
      <h2>Crear</h2>
      <div className="row">
        <Formik
          initialValues={{
            Title: "",
            Description: "",
            url: "",
            Type: "constellation",
          }}
          validationSchema={Yup.object({
            Title: Yup.string().required("El titulo es requerido"),
            Description: Yup.string().required("La descripcion es requerida"),
            url: Yup.string()
              .url("Debe ser una url valida")
              .required("La url de la imagen es requerida"),
          })}
          onSubmit={async (values) => {
            switch (values.Type) {
              case "constellation":
                await _handleSubmit(values, API_URL_CONSTELLATIONS());
                history("/constellations");
                break;
              case "planet":
                await _handleSubmit(values, API_URL_PLANETS());
                history("/planets");
                break;
              case "star":
                await _handleSubmit(values, API_URL_STARS());
                history("/stars");
                break;
            }
          }}
        >
          {(formikProps) => (
            <Form className="col-6" method="POST">
              <div className="form-group">
                <label htmlFor="Title">Titulo</label>
                <Field
                  name="Title"
                  className="form-control"
                  placeholder="Title"
                />
                <FieldError field="Title"></FieldError>
                <label htmlFor="Description">Descripcion</label>
                <Field
                  name="Description"
                  className="form-control"
                  placeholder="Description"
                />
                <FieldError field={"Description"}></FieldError>
                <label htmlFor="url">Imagen</label>
                <Field
                  name="url"
                  className="form-control"
                  placeholder="www.img.com/img"
                />
                <FieldError field={"url"}></FieldError>
                <label htmlFor="">Tipo</label>
                <Field as="select" name="Type" className="form-select">
                  <option value="constellation">Constelaciones</option>
                  <option value="planet">Planetas</option>
                  <option value="star">Estrellas</option>
                </Field>
                <FieldError field={"Type"}></FieldError>
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

