import { useState, useEffect } from "react";
import Map from "../assets/Map.png";
import Input from "../components/Form/Input";
import SearchIcon from "../assets/Search2.svg";
import ProfilePhoto from "../assets/ProfilePhoto.png";
import { useNavigate } from "react-router-dom";

const FindHospital: React.FC = () => {
  const [value, setValue] = useState("");

  const HandleKeyPress: any = (): void => {
    throw new Error("Function not implemented.");
  };

  const handleInputChange = (newValue: string) => {
    setValue(newValue);
  };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("https://care-finder.onrender.com/hospitals?search=herb")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  const fetchHospital = (searchText: string) => {
    console.log("searching", searchText);
    fetch(`https://care-finder.onrender.com/v1/hospitals?search=${searchText}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log({ result });
          setIsLoaded(true);
          setItems(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  return (
    <div className="min-h-screen">
      <div
        className="w-full h-[450px] lg:h-[568px] relative"
        style={{ backgroundImage: `url(${Map})` }}
      >
        <div className="absolute top-[90px] flex flex-col gap-y-[15px] lg:flex-row lg:items-center justify-between w-full px-[15px] lg:px-unset lg:pl-[102px]">
          <Input
            type="text"
            onKeyDownEnter={HandleKeyPress}
            onChange={(e: string) => fetchHospital(e as string)}
            placeholder="Address"
            className="w-full bg-[#fff] lg:w-[587px] h-[46px]"
          />

          <div className="flex flex-col gap-y-[20px] lg:flex-row items-center justify-between">
            <Input
              onKeyDownEnter={HandleKeyPress}
              type="text"
              onChange={handleInputChange}
              placeholder="City"
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
          {items.map((item: any) => (
            <FindHospitalCard
              image={item}
              hospitalName={item.name}
              hospitalAddress={item.address}
              index={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

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
function fetchHospital() {
  throw new Error("Function not implemented.");
}
