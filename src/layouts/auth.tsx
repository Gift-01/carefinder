/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthBg from "../assets/AuthBg.png";
import CareFinder2 from "../assets/CareFinder2.png";
import Circle from "../assets/Circle.svg";

const AuthLayout = ({ children }: { children: any }) => {
  return (
    <div className={`w-full flex flex-col lg:flex-row min-h-screen`}>
      <div className="w-[100%] lg:w-[50%] bg-[#E0E4EC] basis1/2 flex justify-center items-center">
        <div className="w-full h-full flex justify-center lg:justify-end pt-[56px] pb-[59px]">
          {children}
        </div>
        <div className="absolute bottom-0 left-0">
          <img src={Circle} alt="circle" />
        </div>
      </div>
      <div
        className="hidden lg:inline-block w-[50%] basis1/2 min-h-screen pb-[68px]"
        style={{
          backgroundImage: `url(${AuthBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 className="pt-[70px] text-[50px] text-[#08299B]">Care Finder</h4>
        <p className="mt-[22px] text-[50px]">Join Our Community</p>
        <p className="mt-[19px]">Enjoy seamless access to medical services.</p>
        <div
          className="w-full flex justify-center mt-[9px] h-[417px] rounded-[20px]"
          style={{
            backgroundImage: `url(${CareFinder2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AuthLayout;
