import  { useState } from "react";
import Select from "../Form/SelectOptions";
import Input from "../Form/Input";
import DoctorOne from "../../assets/DoctorProfile.svg";
import DoctorTwo from "../../assets/DoctorTwoProfile.svg";
import DoctorThree from "../../assets/DoctorThreeProfile.svg";
import DoctorFour from "../../assets/DoctorFourProfile.svg";
import { ReactComponent as Location } from "../../assets/Location2.svg";

const BookAppointment: React.FC = () => {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (newValue: string) => {
    setValue(newValue);
  };
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-y-[50px] w-full">
      <div className="w-[100%] md:w-[50%]">
        <p className=" text-[#08299B] text-[20px] md:text-[40px] font-bold leading-[150%] mb-[30px] md:mb-[50px]">
          QUALIFIED DOCTORS
        </p>
        <div className="flex flex-wrap gap-y-[96px]">
          <BookAppointmentCard
            image={DoctorOne}
            name="Dr Cole Ben"
            position="Pediatrician"
            hospitalName="Goodwill Hospital"
            className="w-[50%]"
          />

          <BookAppointmentCard
            image={DoctorTwo}
            name="Dr Cole Ben"
            position="Pediatrician"
            hospitalName="Goodwill Hospital"
            className="w-[50%]"
          />

          <BookAppointmentCard
            image={DoctorThree}
            name="Dr Cole Ben"
            position="Pediatrician"
            hospitalName="Goodwill Hospital"
            className="w-[50%]"
          />

          <BookAppointmentCard
            image={DoctorFour}
            name="Dr Cole Ben"
            position="Pediatrician"
            hospitalName="Goodwill Hospital"
            className="w-[50%]"
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] flex justify-center">
        <div className="w-full md:w-[466px] px-[30px] md:px-[0px] flex flex-col">
          <div className="w-full flex bg-[#08299B] h-[70px] text-[#fff] rounded-[25px] items-center justify-center mb-[37px]">
            Book An Appointment
          </div>
          <Input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Address"
            iconRight={Location}
            className="md:w-[466.26px] h-[59px] bg-[#E0E4EC] mb-[37px] pr-[22.54px]"
          />
          <div className="self-start mb-[37px] w-full md:w-[466.26px]">
            <Select
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
              placeholder="Choose your Hospitals"
              className="bg-[#E0E4EC] h-[59px] w-full rounded-[12px] pl-[10px] pr-[25.15px]"
            />
          </div>
          <div className="self-start mb-[37px] w-full md:w-[466.26px]">
            <Select
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
              placeholder="Choose Department"
              className="bg-[#E0E4EC] w-full h-[59px] rounded-[12px] pl-[10px] pr-[25.15px]"
            />
          </div>
          <Input
            type="email"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter Name"
            className="md:w-[466.26px] h-[59px] bg-[#E0E4EC] mb-[37px]"
          />

          <Input
            type="email"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter Email"
            className="w-full md:w-[466.26px] h-[59px] bg-[#E0E4EC] mb-[37px]"
          />
          <Input
            type="date"
            value={value}
            onChange={handleInputChange}
            placeholder="Select Date"
            className="w-full md:w-[466.26px] h-[59px] bg-[#E0E4EC] mb-[37px] pr-[25.15px]"
          />
          <Input
            type="time"
            value={value}
            onChange={handleInputChange}
            placeholder="Select Time"
            className="w-full md:w-[466.26px] h-[59px] bg-[#E0E4EC] pr-[25.15px]"
          />
          <div className="flex mt-[20px] md:mt-[40px] mb-[30px] justify-center">
            <button className="w-full md:w-[429px] h-[70px] rounded-[25px] bg-[#08299B] text-[#fff] text-[15px] md:text-[30px] leading-[150%]">
              {" "}
              Book An Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookAppointmentCard = ({
  image,
  name,
  position,
  hospitalName,
  className,
}: {
  image: string;
  name: string;
  position: string;
  hospitalName: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <img
        src={image}
        className="w-[90px] md:w-[183px] h-[90px] md:h-[183px] mb-[19px]"
      />
      <h3 className="text-[15px] text-[#08299B] leading-[150%] -tracking-[0.165px] mb-[5px]">
        {name}
      </h3>
      <p className="text-[12px] text-[#837D7D] leading-[150%] mb-[5px]">
        {position}
      </p>
      <p className="text-[12px] text-[#837D7D] leading-[150%]">
        {hospitalName}
      </p>
    </div>
  );
};

export default BookAppointment;
