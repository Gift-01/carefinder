import BackgroundImage from "../../assets/Background.svg";
import Appointment from "../../assets/Appointment_Icon.svg";
import Phone from "../../assets/Phone.svg";
import Folded from "../../assets/Folded_arm.svg";
import Visit from "../../assets/Visit_Icon.svg";
import Arrow1 from "../../assets/Arrow1.svg";
import Arrow2 from "../../assets/Arrow2.svg";
import Arrow3 from "../../assets/Arrow3.svg";

function ServiceBreakdown() {
  return (
    <div className="md:my-[200px] mx-[38px] ">
      <div className="h-[300px] md:h-[694px] relative">
        <img className="h-full" src={BackgroundImage} alt="Background image" />
        <div className="h-full w-full absolute top-0">
          <h3 className="text-center pt-[42px] text-[#08299B] text-[20px] md:text-[40px]">
            How It Works
          </h3>

          <div className="mt-[54px] md:mt-[114px] flex justify-center pl-[20px] md:pl-[89px] pr-[20px] md:pr-[49px]">
            <ServiceBreakdownCard
              title="Find Hospital"
              description="Find the best hospitals and doctors near you, our efficient search engine provides you with the best results."
              image={Folded}
              className="md:mt-[35px]"
            />
            <img
              src={Arrow1}
              className="w-[70px] md:w-[170px] hidden md:inline-flex"
            />
            <ServiceBreakdownCard
              title="Save or share hospital"
              description="Carefinder allows users to save and share the list of hospitals with others. Users can share the information via email or by generating a shareable link"
              image={Phone}
              className="md:mt-[157px]"
            />
            <img
              src={Arrow2}
              className="w-[70px] md:w-[170px] hidden md:inline-flex"
            />
            <ServiceBreakdownCard
              title="Book Appointment"
              description="Book appointments easily by inputting correct details"
              image={Appointment}
            />
            <img
              src={Arrow3}
              className="w-[70px] md:w-[170px] hidden md:inline-flex"
            />
            <ServiceBreakdownCard
              title="Make a visit"
              description="Appointment confirmed, then make a visit to your selected hospital or doctor"
              image={Visit}
              className="md:mt-[211px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceBreakdownCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={image}
        className="w-[30px] md:w-[120px] h-[30px] md:h-[120px] rounded-[50%] mb-[6px]"
      />
      <h3 className="leading-[150%] font-bold text-[12px] md:text-[15px] tracking-[0.165px]">
        {title}
      </h3>
      <p className="mt-[5px] text-[10px] md:text-[12px] leading-[150%] font-medium md:w-[143px] hidden md:inline-flex">
        {description}
      </p>
    </div>
  );
};

export default ServiceBreakdown;
