import React from "react";
import Patient from "../../assets/Patient.svg";
import Doctor from "../../assets/DoctorAndPatient.svg";
import Button from "../Form/ButtonLink";

function Welcome() {
  return (
    <div className="md:my-[20px] md:flex">
      <div className="flex w-2/4 md:gap-[23px]">
        <img
          src={Patient}
          alt="A patient"
          className="w-[300px] h-[500px] md:h-[650px]"
        />
        <img
          src={Doctor}
          alt="Nurse and patient"
          className=" w-[300px] h-[500px] md:h-[650px] my-[40px]"
        />
      </div>
      <div className="md:w-2/4 my-[-30px] md:my-[100px] mx-[75px]">
        <h2 className="text-[30px] md:text-[45px] md:leading-[67.5px] mb-[13px]">
          <p> Welcome to</p>
          <span style={{ color: "#08299B" }}>CareFinder</span>
        </h2>
        <p className="leading-[45px] text-[30px]">
          Carefinder is a platform where users can search for hosiptals in their
          areas, export hospital details for your records and enhance your
          healthcare experience by connecting with others and sharing valuable
          resources.
        </p>
        <Button
          to="#"
          className="text-white rounded-2xl mt-[30px] md:mt-[50px] w-[243px]  h-[40px] md:h-[59px] text-[25px] "
          style={{ backgroundColor: "#08299B" }}
        >
          OUR SERVICES
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
