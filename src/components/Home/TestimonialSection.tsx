import LineIcon from "../../assets/Line1.svg";
import RatingImg from "../../assets/Rating.png";
import TestimonialImg1 from "../../assets/TestimonialImg1.png";
import TestimonialImg2 from "../../assets/TestimonialImg2.png";
import TestimonialImg3 from "../../assets/TestimonialImg3.png";

const TestimonialSection = () => {
  return (
    <div className="w-full flex flex-col items-center md:mt-[97px]">
      <div className="flex items-center gap-x-[7px]">
        <img src={LineIcon} alt="line" />
        <h3 className="text-[#837D7D] text-[35px] leading-[150%]">
          Testimonials
        </h3>
      </div>
      <p className="mt-[15px] text-[#08299B] text-[50px] mb-[65px]">
        What Our Users Say
      </p>
      <div className="flex flex-wrap justify-center gap-y-[20px] gap-x-[98px]">
        <TestimonialSectionCard
          description="Finding the right hospital has never been easier! With this website, I was able to locate a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended"
          name="Sarah M."
          image={TestimonialImg1}
        />

        <TestimonialSectionCard
          description="I can’t express how grateful i am for carefinder website. When i needed urgent medical care while travelling, it helped me locate the nearest hospital in a matter of  seconds. The accurate results and detailed directions saved me valuable time and ensured i received the care i needed"
          name="John D."
          image={TestimonialImg2}
        />

        <TestimonialSectionCard
          description="I recently moved to a new city and had no idea where to go for medical assistance, my friend shared me some hospital details using the carefinder website. It made my life easier, i was able to fine reputable hospitals near me effortlessly. The website’s is user friendly interface and comprehnsive search gave me peace of mind. I highly recommend."
          name="Emiliy T."
          image={TestimonialImg3}
        />
      </div>
    </div>
  );
};

const TestimonialSectionCard = ({
  description,
  name,
  image,
}: {
  description: string;
  name: string;
  image: string;
}) => {
  return (
    <div className="w-[348px] bg-[#E0E4EC] rounded-[12px] px-[51px] pt-[40px] shadow-[0px_4px_4px_0px_#BFCAE0]">
      <p className="text-[10px] leading-[150%] text-left">{description}</p>
      <img src={RatingImg} className="mt-[15px]" />
      <div className="flex items-center mt-[12.45px]">
        <img
          src={image}
          alt="testimonial section"
          className="w-[43px] h-[43px] mr-[14px]"
        />
        <p className="text-[10px] font-medium">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialSection;
