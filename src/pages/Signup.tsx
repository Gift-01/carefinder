import AuthLayout from "../layouts/auth";
import Input from "../components/Form/Input";
import { ReactComponent as PasswordLocked } from "../assets/PasswordLocked.svg";
import { ReactComponent as GoogleIcon } from "../assets/Google.svg";
import { ReactComponent as AppleIcon } from "../assets/Apple.svg";
import { ReactComponent as FacebookIcon } from "../assets/Facebook.svg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="w-[90%] flex flex-col z-[999] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] lg:rounded-tr-[0px] rounded-br-[20px] lg:rounded-br-[0px] bg-[#f2f2f2] px-[25px]">
        <h4 className="mt-[50px] mb-[40px] text-[40px] mb-[38px]">
          Create An Account
        </h4>

        <p className="text-left mb-[10px]">Name</p>
        <Input
          value=""
          onChange={(e) => console.log(e)}
          type="text"
          className="bg-[#E0E4EC] w-full h-[64px]"
          placeholder="Enter Email Address"
        />

        <p className="text-left mb-[10px] mt-[34px]">Email Address</p>
        <Input
          value=""
          onChange={(e) => console.log(e)}
          type="email"
          className="bg-[#E0E4EC] w-full h-[64px]"
          placeholder="Enter Email Address"
        />

        <p className="text-left mt-[34px] mb-[10px]">Password</p>
        <Input
          value=""
          onChange={(e) => console.log(e)}
          type="password"
          className="bg-[#E0E4EC] w-full h-[64px]"
          placeholder="Enter Password"
          iconRight={PasswordLocked}
        />

        <div className="w-full flex justify-center">
          <button className="mt-[42px] mb-[21px] w-[70%] rounded-[12px] bg-[#08299B] h-[59px] text-[#fff] text-[30px]">
            Create Account
          </button>
        </div>

        <p className="text-[25px] font-bold mb-[28px]">OR</p>
        <div className="flex w-full justify-center items-center gap-x-[25px] mb-[60px]">
          <GoogleIcon className="cursor-pointer" />
          <AppleIcon className="cursor-pointer" />
          <FacebookIcon className="cursor-pointer" />
        </div>

        <p className="pb-[22px]">
          Already have an account?{" "}
          <b
            className="italic text-[#08299B] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </b>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Signup;
