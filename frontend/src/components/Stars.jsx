import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../LoginContext";
import { GenericView } from "../GenericView";
import { API_URL_STARS, HEADERS_AUTH } from "../utils/constans";

export const Stars = () => {
  const [context, setContext] = useContext(LoginContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  useEffect(() => {
    if (context === null || user === null) {
      history("/login");
    }
  }, []);
  return (
    <GenericView values={API_URL_STARS} headers={HEADERS_AUTH(user.token)} />
  );
};
