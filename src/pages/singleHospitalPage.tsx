import { useLocation } from "react-router-dom";
import Input from "../components/Form/Input";
import SaveFill from "../assets/SaveFill.svg";
import SaveFill2 from "../assets/SaveFill2.svg";

const SingleHospitalPage = () => {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col items-center py-[53px]">
      <div className="w-full flex justify-center px-[25px]">
        <Input
          type="text"
          onChange={(e) => console.log(e)}
          value=""
          className="w-[100%] lg:w-[664px] h-[46px]"
          placeholder={location?.state?.hospitalName}
        />
      </div>
      <div className="mt-[55px] flex flex-col lg:flex-row gap-x-[90px] w-full px-[25px] lg:px-[66px]">
        <div
          className="w-full lg:w-[700px] h-[350px] lg:h-[700px] rounded-[12px]"
          style={{
            backgroundImage: `url(${location?.state?.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="w-full lg:w-[50%] flex flex-col items-center pt-[40px]">
          <div className="bg-[#DBE0EA] h-[514px] w-full flex flex-col gap-y-[31px] rounded-[12px] pt-[36px] px-[41px]">
            <Input
              type="text"
              disabled
              value={location?.state?.hospitalName}
              onChange={(e) => console.log(e)}
              className="border-[#000] h-[53px]"
            />

            <Input
              type="text"
              disabled
              value={location?.state?.hospitalAddress}
              onChange={(e) => console.log(e)}
              className="border-[#000] h-[53px]"
            />

            <Input
              type="text"
              disabled
              value={location?.state?.hospitalEmail}
              onChange={(e) => console.log(e)}
              className="border-[#000] h-[53px]"
            />

            <Input
              type="text"
              disabled
              value={`Opening Hours: ${location?.state?.openingHours}hours`}
              onChange={(e) => console.log(e)}
              className="border-[#000] h-[53px]"
            />

            <Input
              type="text"
              disabled
              value={location?.state?.phoneNumber}
              onChange={(e) => console.log(e)}
              className="border-[#000] h-[53px]"
            />

            <div className="flex w-full justify-center gap-x-[47px]">
              <img src={SaveFill} className="cursor-pointer" />
              <img src={SaveFill2} className="cursor-pointer" />
            </div>
          </div>
          <div className="mt-[63px] w-[90%]">
            <button className="bg-[#08299B] rounded-[25px] text-[#fff] w-full h-[70px]">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHospitalPage;
