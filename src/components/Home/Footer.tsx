const Footer = () => {
  return (
    <div className="md:h-[240px] pt-[40px] pb-[30px] gap-y-[30px] w-full bg-[#E0E4EC] flex flex-wrap justify-between px-[93px] mt-[146px]">
      <div className="text-left">
        <h4 className="text-[#08299B] text-[30px] leading-[150%] -tracking-[0.33px]">
          Carefinder
        </h4>
        <p className="text-[15px]">Plot 42, Akinza Street,</p>
        <p>Victoria island, Lagos</p>
        <p>+2349167351788</p>
      </div>
      <div className="text-left md:ml-[70px] flex flex-col">
        <a
          href="#"
          className="text-[#08299B] text-[30px] leading-[150%] -tracking-[0.33px]"
        >
          About Us
        </a>
        <a href="#" className="text-[15px]">
          News & Media
        </a>
        <a className="text-[15px]">Contact Us</a>
      </div>
      <div className="text-left flex flex-col">
        <a
          href="#"
          className="text-[#08299B] text-[30px] leading-[150%] -tracking-[0.33px]"
        >
          Quick Links
        </a>
        <a href="/profile" className="text-[15px]">
          My account
        </a>
        <a href="/findhospital" className="text-[15px]">
          Book an appointment
        </a>
        <a href="/library" className="text-[15px]">
          Library
        </a>
      </div>
    </div>
  );
};

export default Footer;
