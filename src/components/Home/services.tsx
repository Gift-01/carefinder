import Doctor from "../../assets/Doctor.svg";
import Hospital from "../../assets/Hospital.svg";
import Export from "../../assets/Export_Icon.svg";
import Share from "../../assets/Share_Icon.svg";

function Services() {
  return (
    <div className="my-[50px] md:mx-[2px] w-full ">
      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px]  ">
        <div
          style={{ backgroundColor: "#E0E4EC" }}
          className="w-[345px] h-[250px] rounded-xl p-[20px]"
        >
          <img src={Hospital} alt="Nurse and patient" className="mx-[100px]" />

          <h2 className="font-bold my-[13px]">Search Hospitals</h2>
          <p>Effortlessly Find the Best Hospitals Near You</p>
        </div>
        <div
          style={{ backgroundColor: "#E0E4EC" }}
          className="w-[345px] h-[250px] rounded-xl  p-[20px]"
        >
          <img src={Doctor} alt="Nurse and patient" className="mx-[100px] " />
          <h2 className="font-bold my-[13px]">Search Doctors</h2>
          <p>Effortlessly Find the Best Doctors Near You</p>
        </div>
        <div
          style={{ backgroundColor: "#E0E4EC" }}
          className="w-[345px] h-[250px] rounded-xl  p-[20px]"
        >
          <img src={Export} alt="Nurse and patient" className="mx-[100px] " />
          <h2 className="font-bold my-[13px]">Export Doctors</h2>
          <p>Save list of hospitals.</p>
        </div>
        <div
          style={{ backgroundColor: "#E0E4EC" }}
          className="w-[345px] h-[250px] rounded-xl  p-[20px]"
        >
          <img src={Share} alt="Nurse and patient" className="mx-[100px]" />
          <h2 className="font-bold my-[13px]">Share Doctors</h2>
          <p>Share the list of hospitals with others. </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Services;
