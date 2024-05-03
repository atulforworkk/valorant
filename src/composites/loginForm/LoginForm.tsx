import PreAuthInput from "../../components/input/PreAuthInput";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const LoginForm = () => {
  return (
    <div className="">
      <div>
        <h1 className=" text-2xl font-semibold underline-offset-u ">Login</h1>
        <p>
          Dosen't have a account yet ?{" "}
          <Link to="/" className="text-link-color">
            Register
          </Link>
        </p>
      </div>
      <div>
        <form action="">
          <PreAuthInput label="Email-id" type="Email" />
          <PreAuthInput label="Password" type="password" />
          <Button
            variant="filled"
            color="Purple"
            size="sm"
            radius="md"
            className="min-w-[300px] mt-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
