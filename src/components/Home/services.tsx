import React from "react";
import Doctor from "../../assets/Doctor.svg";
import Hospital from "../../assets/Hospital.svg";
import Export from "../../assets/Export_Icon.svg";
import Share from "../../assets/Share_Icon.svg";

function Services() {
  return (
    <div className="flex">
      <div>
        <img src={Hospital} alt="Nurse and patient" className="" />
        <h2>Search Hospitalss</h2>
        <p>Effortlessly Find the Best Hospitals Near You</p>
      </div>
      <div>
        <img src={Doctor} alt="Nurse and patient" className="]" />
        <h2>Search Doctors</h2>
        <p>Effortlessly Find the Best Doctors Near You</p>
      </div>
      <div>
        <img src={Export} alt="Nurse and patient" className="" />
        <h2>Export Doctors</h2>
        <p>Save list of hospitals.</p>
      </div>
      <div>
        <img src={Share} alt="Nurse and patient" className="" />
        <h2>Share Doctors</h2>
        <p>Share the list of hospitals with others. </p>
      </div>
    </div>
  );
}

export default Services;
