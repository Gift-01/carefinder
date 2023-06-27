import React, { useState } from "react";
import Select from "../Form/SelectOptions";
import Input from "../Form/Input";
import { FaMapMarkerAlt } from "react-icons/fa";

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
    <div>
      <div>
        <button>Book An Appointment</button>
        <Input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Address"
          icon={FaMapMarkerAlt}
          className="md:w-[600px]"
        />
        <div>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
            placeholder="Choose your Hospitals"
          />
        </div>
        <div className="md:w-[600px]">
          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
            placeholder="Choose Department"
          />
        </div>
        <Input
          type="email"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter Name"
          className="md:w-[600px]"
        />

        <Input
          type="email"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter Email"
          className="md:w-[600px]"
        />
        <Input
          type="date"
          value={value}
          onChange={handleInputChange}
          placeholder="Select Date"
          className="md:w-[600px]"
        />
        <Input
          type="time"
          value={value}
          onChange={handleInputChange}
          placeholder="Select Time"
          className="md:w-[600px]"
        />
        <button> Book An Appointment Now</button>
      </div>
    </div>
  );
};

export default BookAppointment;
