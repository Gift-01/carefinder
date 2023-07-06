import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Form/ButtonLink";
import Nurse from "../../assets/Nurse.svg";
import Input from "../Form/Input";
import { ReactComponent as SearchIcon } from "../../assets/Search.svg";
import { ReactComponent as LocationIcon } from "../../assets/Location.svg";

const HomeBase: React.FC = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const handleInputChange = (newValue: string) => {
    setValue(newValue);
  };
  // const HandlekeyPress = (e: { key: string; which: number }) => {
  //   if (e.key === "Enter") {
  //     // alert("You pressed enter!");
  //     navigate("/findhospital/" + value);
  //   }
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function HandlekeyPress(e: { key: string }): void {
    if (e.key === "Enter") {
      navigate("/findhospital");
    }
    throw new Error("Function not implemented.");
  }

  return (
    <div style={{ backgroundColor: "#E0E4EC " }}>
      <div className="block md:flex py-14 w-full">
        <div className=" md:w-1/2  items-center my-[45px]">
          <p
            style={{ color: "#08299B" }}
            className="md:font-bold md:text-[40px] text-center"
          >
            Find the nearest hospital to you and make an appointment
          </p>
          <p className="text-[25px]  my-[37px] mx-[74px]">
            Discover your Perfect care; Find your Hospital,Anytime, Anywhere!
          </p>
          <div className="flex flex-col">
            <Button
              to="/findhospital"
              style={{ backgroundColor: "#08299B" }}
              className="text-white rounded-lg px-[24px] py-[3px] mb-[24px]"
            >
              GET STARTED
            </Button>
            <Link to="#" className="italic">
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-2/3 flex justify justify-end items-end">
          <img src={Nurse} alt="Nurse and patient" className="w-[700px]" />
        </div>
      </div>
      <div className="pb-[88px]">
        <p className="text-[25px] " style={{ color: "#08299B" }}>
          Find a nearby Hospital
        </p>
        <div className="w-full flex justify-center items-center">
          <Input
            type="text"
            value={value}
            onKeyDownEnter={HandlekeyPress}
            onChange={handleInputChange}
            placeholder="Federal Medical Center,Ebutta Meta,Lagos state"
            iconLeft={LocationIcon}
            className="md:w-[600px] h-[64px] bg-[#fff]"
            iconRight={SearchIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBase;
