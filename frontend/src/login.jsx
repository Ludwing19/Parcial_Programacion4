import { SingIn } from "./components/SingIn";
import { SingUp } from "./components/SingUp";

export const Login = () => {
  return (
    <div className="row">
      <SingIn></SingIn>
      <SingUp></SingUp>
    </div>
  );
};
