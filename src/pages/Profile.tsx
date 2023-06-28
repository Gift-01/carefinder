import ProfilePhoto from "../assets/ProfilePhoto.png";
import Input from "../components/Form/Input";
import Facebook from "../assets/Facebook2.svg";
import Instagram from "../assets/Instagram.svg";

const Profile = () => {
  return (
    <div className="w-full relative">
      <h4 className="text-[40px] text-[#08299B] absolute top-[37px] left-0">
        CareFinder
      </h4>
      <div className="absolute right-[30px] lg:right-[113px] top-[17px] lg:top-[37px]">
        <img src={ProfilePhoto} alt="profile" />
      </div>
      <div className="w-full flex flex-col items-center text-left pt-[132px] lg:pt-[72px]">
        <Input
          value=""
          onChange={(e) => console.log(e)}
          type="text"
          placeholder="Search hospital"
          className=" w-[90%] lg:w-[40%] h-[60px] border-[#000]"
        />

        <h4 className="mt-[56px] text-[28px] text-[#08299B] font-bold mb-[40px]">
          PROFILE DETAILS
        </h4>

        <div className="text-left w-[90%] lg:w-[40%]">
          <p className="mb-[12px]">Name</p>
          <Input
            value=""
            onChange={(e) => console.log(e)}
            type="text"
            placeholder="Enter Name"
            className="w-full h-[60px] border-[#000]"
          />

          <p className="mb-[12px] mt-[51px]">Email Address</p>
          <Input
            value=""
            onChange={(e) => console.log(e)}
            type="text"
            placeholder="Enter Email Address"
            className="w-full h-[60px] border-[#000]"
          />

          <p className="mb-[12px] mt-[51px]">Address</p>
          <Input
            value=""
            onChange={(e) => console.log(e)}
            type="text"
            placeholder="Enter Address"
            className="w-full h-[60px] border-[#000]"
          />
        </div>
        <button className="bg-[#08299B] mb-[58px] text-[#fff] mt-[39px] w-[141px] h-[59px] rounded-[12px] text-[30px] font-medium">
          Save
        </button>
        <p className="text-[25px] leading-[150%] font-medium mb-[20px] lg:mb-[10px] text-center">
          Connect to Social Media Accounts
        </p>
        <div className="flex gap-x-[34px] pb-[50px]">
          <img src={Facebook} alt="fb" />
          <img src={Instagram} alt="insta" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
