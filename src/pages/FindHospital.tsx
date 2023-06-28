import React from "react";
import Map from "../assets/Map.png";
import Input from "../components/Form/Input";
import SearchIcon from "../assets/Search2.svg";
import ProfilePhoto from "../assets/ProfilePhoto.png";
import Hospital1 from "../assets/Hospital1.png";
import Hospital2 from "../assets/Hospital2.png";
import Hospital3 from "../assets/Hospital3.png";
import Hospital4 from "../assets/Hospital4.png";
import { useNavigate } from "react-router-dom";

function FindHospital() {
  return (
    <div className="min-h-screen">
      <div
        className="w-full h-[450px] lg:h-[568px] relative"
        style={{ backgroundImage: `url(${Map})` }}
      >
        <div className="absolute top-[90px] flex flex-col gap-y-[15px] lg:flex-row lg:items-center justify-between w-full px-[15px] lg:px-unset lg:pl-[102px]">
          <Input
            type="text"
            onChange={(e) => console.log(e)}
            value=""
            placeholder="Address"
            className="w-full bg-[#fff] lg:w-[587px] h-[46px]"
          />

          <div className="flex flex-col gap-y-[20px] lg:flex-row items-center justify-between">
            <Input
              type="text"
              onChange={(e) => console.log(e)}
              value=""
              placeholder="Zipcode"
              className="w-full bg-[#fff] lg:w-[224px] h-[44px]"
            />

            <div className="flex items-center mr-[17px]">
              <button className="w-[76px] ml-[13px] mr-[23px] h-[46px] flex justify-center items-center bg-[#08299B] rounded-[15px]">
                <img src={SearchIcon} alt="search" />
              </button>
              <img src={ProfilePhoto} alt="photo" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[34px] mx-[40px] lg:mx-[66px]">
        <h4 className="text-[30px] leading-[150%] text-left lg:px-[100px] mb-[20px]">
          Hospitals Nearby
        </h4>

        <div className="flex flex-wrap justify-between lg:px-[100px] gap-y-[25px] pb-[70px]">
          <FindHospitalCard
            image={Hospital1}
            hospitalName="Eve Foundation"
            hospitalAddress="Hospital 32, Admiralty way"
            index={1}
          />

          <FindHospitalCard
            image={Hospital2}
            hospitalName="Nigerian Police Hospital"
            hospitalAddress="Falomo"
            index={2}
          />

          <FindHospitalCard
            image={Hospital3}
            hospitalName="Gold cross Hospital"
            hospitalAddress="Bourdillon Road"
            index={3}
          />

          <FindHospitalCard
            image={Hospital4}
            hospitalName="Mayo Clinic"
            hospitalAddress="12, Femi Okunnu Road"
            index={4}
          />

          <FindHospitalCard
            image={Hospital1}
            hospitalName="Eve Foundation"
            hospitalAddress="Hospital 32, Admiralty way"
            index={5}
          />

          <FindHospitalCard
            image={Hospital2}
            hospitalName="Nigerian Police Hospital"
            hospitalAddress="Falomo"
            index={6}
          />

          <FindHospitalCard
            image={Hospital3}
            hospitalName="Gold cross Hospital"
            hospitalAddress="Bourdillon Road"
            index={7}
          />

          <FindHospitalCard
            image={Hospital4}
            hospitalName="Mayo Clinic"
            hospitalAddress="12, Femi Okunnu Road"
            index={8}
          />
        </div>
      </div>
    </div>
  );
}

const FindHospitalCard = ({
  image,
  hospitalName,
  hospitalAddress,
  hospitalEmail,
  phoneNumber,
  openingHours,
  index,
}: {
  image: string;
  hospitalName: string;
  hospitalAddress: string;
  hospitalEmail?: string;
  openingHours?: string;
  phoneNumber?: string;
  index: number;
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full lg:w-[223px] flex-col justify-center items-center text-[15px]">
      <img
        src={image}
        alt="hospImg"
        className="w-full lg:w-[223px] lg:h-[201px]"
      />
      <p className="mt-[39px]">{hospitalName}</p>
      <p className="mt-[10px]">{hospitalAddress}</p>
      <p
        className="text-[#08299B] mt-[30px] cursor-pointer"
        onClick={() =>
          navigate(`/findHospital/${index}`, {
            state: {
              image: image,
              hospitalName: hospitalName,
              hospitalAddress: hospitalAddress,
              hospitalEmail: hospitalEmail || "Evefoundation1@gmail.com",
              openingHours: openingHours || "24hours",
              phoneNumber: phoneNumber || "+23490378427843",
            },
          })
        }
      >
        See More
      </p>
    </div>
  );
};

export default FindHospital;
