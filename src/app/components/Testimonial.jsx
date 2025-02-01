"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import pointImage1 from "../../../public/images/projects/Pic.png";

const testimonials = [
  {
    name: "David J. Karem",
    position: "Businessmen",
    message:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
    image: pointImage1,
    timePosted: "1 days ago",
  },
  {
    name: "David J. Karem2",
    position: "Businessmen",
    message:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
    image: pointImage1,
    timePosted: "1 days ago",
  },
  {
    name: "David J. Karem3",
    position: "Businessmen",
    message:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
    image: pointImage1,
    timePosted: "1 days ago",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div
      id="pricing"
      className="py-[30px] md:py-[40px] lg:py-[70px] xl:py-[100px] px-[20px] relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1320px] mx-auto text-center">
        <div
          className="relative z-[1] flex w-auto inline-flex rounded-[38px]"
          style={{
            boxShadow:
              "0px 4px 50px 0px #9F64EF66, 0px 0px 12px 0px #FFFFFF33 inset",
          }}
        >
          <Link
            href=""
            className="linear_btn font-aeonik border border-[1px] border-transparent 
                  px-[16px] py-[8px] text-[14px] font-[400] leading-[14px] 
                  flex-1 font-bold text-[#CAD1E9] bg-[#0F0B15] rounded-[38px] 
                  transition-all duration-300 ease-linear "
            style={{
              background:
                "linear-gradient(#0F0B15 0 0) padding-box, linear-gradient(45deg, #090EDB, #8D1EA2) border-box",
            }}
          >
            Testimonials
          </Link>
        </div>
        <h2 className="relative z-[1] text-center m-auto mt-[8px] mb-[20px] md:mb-[40px] max-w-[430px] font-sora text-[26px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-[600] text-[#CAD1E9]">
          What’s our user {""}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#F33CC0_13.43%,#4349FF_73.37%)]">
            says {""}
          </span>
          about us
        </h2>
        <div
          className="relative p-[20px] md:p-[40px] mx-auto rounded-[20px] backdrop-blur-[16px]"
          style={{
            boxShadow:
              "0 0 0 2px rgba(16, 17, 50, 0.1), 0 0 0 1px rgba(119, 124, 247, 0.1)",
            background:
              "linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)",
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className={`p-[15px] md:p-[24px] pb-[70px] md:pb-[70px] w-full flex rounded-[20px]   
                  backdrop-blur-[16px]`}
                style={{
                  boxShadow:
                    "0 0 0 2px rgba(16, 17, 50, 0.1), 0 0 0 1px rgba(119, 124, 247, 0.1)",
                  background:
                    "linear-gradient(79.59deg, rgba(51, 51, 62, 0.16) 6.21%, rgba(83, 84, 108, 0.16) 98.02%)",
                }}
              >
                <div className="flex flex-col gap-[20px] text-left">
                  <div className="flex gap-[16px] items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px] rounded-full"
                    />
                    <div className="flex flex-col items-start gap-[4px]">
                      <h4 className="text-left w-full text-[20px] md:text-[24px] leading-[20px] md:leading-[24px] font-[600] font-sora text-white">
                        {testimonial.name}
                      </h4>
                      <span className="text-left flex text-[16px] md:text-[20px] leading-[16px] md:leading-[20px] font-[400] font-aeonik text-[#9D9BA6]">
                        {testimonial.position}&nbsp; {"."}{" "}
                        {testimonial.timePosted}
                      </span>
                    </div>
                  </div>
                  <p className="pl-0 sm:pl-[60px] text-[16px] md:text-[20px] leading-[16px] md:leading-[28px] font-[400] font-aeonik text-[#CAC6DD]">
                    {testimonial.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="swiper-button swiper-button-prev absolute transform -translate-y-1/2 p-2 rounded-full text-white"
            style={{
              minWidth: "44px",
              left: "-20px !important",
              top: "55% !important",
              background:
                "linear-gradient(87.95deg, #090EDB -15.78%, #E73DC4 102.06%)",
              border: "1px solid #090EDB",
            }}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="swiper-button swiper-button-next absolute transform -translate-y-1/2 p-2 rounded-full text-white"
            style={{
              minWidth: "44px",
              right: "-20px !important",
              top: "55% !important",
              background:
                "linear-gradient(87.95deg, #090EDB -15.78%, #E73DC4 102.06%)",
              border: "1px solid #090EDB",
            }}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;
