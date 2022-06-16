import { ErrorMessage } from "formik";

export const FieldError = (props) => (
  <ErrorMessage name={props.field}>
    {(message) => <div className="text-danger">{message}</div>}
  </ErrorMessage>
);
