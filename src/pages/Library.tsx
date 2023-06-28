import ProfilePhoto from "../assets/ProfilePhoto.png";
import Library1 from "../assets/SaveFill2.svg";
import Library2 from "../assets/Library2.svg";
import Library3 from "../assets/Library3.svg";
import Hospital1 from "../assets/Hospital1.png";
import Hospital2 from "../assets/Hospital2.png";
import Hospital3 from "../assets/Hospital3.png";
import Hospital4 from "../assets/Hospital4.png";

const Library = () => {
  return (
    <div className="w-full min-h-screen relative">
      <p className="text-[#08299B] text-[25px] lg:text-[50px] text-left ml-[52px] mt-[17px]">
        CareFinder
      </p>
      <img
        src={ProfilePhoto}
        alt="profile"
        className="absolute right-[41px] top-[6px] lg:top-[62px]"
      />
      <div className="w-full flex flex-col items-center">
        <h4 className="mb-[34px] mt-[60px] lg:mt-unset text-[30px] lg:text-[60px] font-bold mb-[34px]">
          My Library
        </h4>
        <p className="mb-[30px] lg:mb-[80px] text-[#545454] text-[20px] lg:text-[40px] px-[25px] lg:px-unset">
          Book Appointment to visit saved hospitals
        </p>
      </div>
      <div className="flex flex-col px-[52px] gap-y-[100px] md:gap-y-[62px] gap-x-[20px] lg:mb-[112px]">
        <LibraryCard
          image={Hospital1}
          hospitalName="Eve Foundation Hospital"
          hospitalAddress="32 Admiralty way, lekki phase 1 Lagos"
        />

        <LibraryCard
          image={Hospital2}
          hospitalName="Eve Foundation Hospital"
          hospitalAddress="32 Admiralty way, lekki phase 1 Lagos"
        />

        <LibraryCard
          image={Hospital3}
          hospitalName="Eve Foundation Hospital"
          hospitalAddress="32 Admiralty way, lekki phase 1 Lagos"
        />

        <LibraryCard
          image={Hospital4}
          hospitalName="Eve Foundation Hospital"
          hospitalAddress="32 Admiralty way, lekki phase 1 Lagos"
        />
      </div>
    </div>
  );
};

const LibraryCard = ({
  image,
  hospitalName,
  hospitalAddress,
}: {
  image: string;
  hospitalName: string;
  hospitalAddress: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-y-[14px] gap-x-[19px] h-[97px]">
      <div className="w-full lg:w-[75%] py-[6px] h-full flex items-center bg-[#E0E4EC] rounded-[15px]">
        <img
          src={image}
          alt="lib img"
          className="ml-[34px] w-[41px] lg:w-[91px] h-[41px] lg:h-[91px] rounded-[50%] mr-[20px] lg:mr-[100px]"
        />
        <div className="text-left">
          <p className="text-[15px] lg:text-[30px] font-bold leading-[150%]">
            {hospitalName}
          </p>
          <p className="text-[10px] lg:text-[20px] font-bold leading-[150%]">
            {hospitalAddress}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[25%] h-full py-[15px] lg:py-unset flex justify-center items-center gap-x-[40px] bg-[#E0E4EC] rounded-[15px]">
        <img
          src={Library1}
          alt="lib1"
          className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]"
        />
        <img
          src={Library2}
          alt="lib2"
          className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]"
        />
        <img
          src={Library3}
          alt="lib3"
          className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]"
        />
      </div>
    </div>
  );
};

export default Library;
