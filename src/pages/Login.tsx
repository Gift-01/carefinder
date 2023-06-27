import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import Input from "../components/Form/Input";
import { ReactComponent as PasswordLocked } from "../assets/PasswordLocked.svg";
import { ReactComponent as GoogleIcon } from "../assets/Google.svg";
import { ReactComponent as AppleIcon } from "../assets/Apple.svg";
import { ReactComponent as FacebookIcon } from "../assets/Facebook.svg";

function Login() {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="w-[90%] flex flex-col z-[999] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] lg:rounded-tr-[0px] rounded-br-[20px] lg:rounded-br-[0px] bg-[#f2f2f2] px-[25px]">
        <h4 className="mt-[50px] mb-[40px] text-[40px] mb-[38px]">
          Welcome Back
        </h4>
        <p className="mb-[34px] text-[25px]">Login using correct details!</p>
        <p className="text-left mb-[10px]">Email Address</p>
        <Input
          value=""
          onChange={(e) => console.log(e)}
          type="email"
          className="bg-[#E0E4EC] w-full"
          placeholder="Enter Email Address"
        />

        <p className="text-left mt-[34px] mb-[10px]">Password</p>
        <Input
          value=""
          onChange={(e) => console.log(e)}
          type="password"
          className="bg-[#E0E4EC] w-full"
          placeholder="Enter Password"
          iconRight={PasswordLocked}
        />

        <div className="w-full flex justify-center">
          <button className="mt-[42px] mb-[21px] w-[70%] rounded-[12px] bg-[#08299B] h-[59px] text-[#fff] text-[30px]">
            Login
          </button>
        </div>

        <p className="text-[25px] font-bold mb-[30px]">OR</p>
        <p className="text-[25px] font-medium leading-[150%]">Login using</p>

        <div className="flex w-full justify-center items-center gap-x-[25px] mt-[13px] mb-[60px]">
          <GoogleIcon className="cursor-pointer" />
          <AppleIcon className="cursor-pointer" />
          <FacebookIcon className="cursor-pointer" />
        </div>

        <p className="pb-[22px]">
          Don't have an account?{" "}
          <b
            className="italic text-[#08299B] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Signup!
          </b>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
