import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { GenericView } from "../GenericView";
import { getLanding } from "../helpers";
import { LoginContext } from "../LoginContext";
import { HEADERS_AUTH } from "../utils/constans";

export const LandingPage = () => {
  const [context, setContext] = useContext(LoginContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  useEffect(() => {
    if (context === null || user === null) {
      history("/login");
    }
  }, []);
  console.log(user);
  return (
    <GenericView values={getLanding()} headers={HEADERS_AUTH(user.token)} />
  );
};
