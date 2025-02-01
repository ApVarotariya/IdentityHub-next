"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceIcon1 from "../../../public/images/projects/service-01.svg";
import ServiceIcon2 from "../../../public/images/projects/service-02.svg";
import ServiceIcon3 from "../../../public/images/projects/service-03.svg";
import Link from "next/link";

const ServicesList = [
  {
    icon: ServiceIcon1,
    title: "Personal Information removal",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    btnLink: "https://xyz.com",
  },
  {
    icon: ServiceIcon2,
    title: "Cloaking Alias Profiles",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    btnLink: "https://xyz.com",
  },
  {
    icon: ServiceIcon3,
    title: "Virtual identities Security",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    btnLink: "https://xyz.com",
  },
];

const ServiceSection = () => {
  return (
    <motion.div
      id="services"
      className="py-[30px] md:py-[40px] lg:py-[70px] xl:py-[100px] max-w-[1320px] m-auto text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex w-auto inline-flex rounded-[38px]"
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
          Services
        </Link>
      </div>
      <h2 className="text-center m-auto mt-[8px] max-w-[430px] font-sora text-[26px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-[600] text-[#CAD1E9]">
        See our services for secure your {""}
        <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#F33CC0_13.43%,#4349FF_73.37%)]">
          Data
        </span>
      </h2>
      <p className="m-auto text-center max-w-[675px] font-aeonik mt-[16px] mb-[20px] md:mb-[40px] text-[18px] leading-[24px] md:text-[24px] md:leading-[34px] text-[#CAC6DD]">
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-[24px] lg:gap-[24px]">
        {ServicesList.map((service, index) => (
          <div
            key={index}
            className="m-auto lg:m-0 flex flex-col items-left text-left p-[20px] xl:p-[32px] w-full max-w-[400px] lg:w-[calc(33.33%-16px)]"
            style={{
              backgroundImage: "url('/images/projects/Carousel card.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
            />
            <h2 className="font-aeonik max-w-[70%] mt-[15px] xl:mt-[24px] mb-[10px] text-[20px] font-[600] leading-[26px] md:text-[24px] md:leading-[30px] xl:text-[28px] xl:leading-[34px] text-[#D6DDF8]">
              {service.title}
            </h2>
            <p className="font-aeonik font-[400] mt-[0] mb-[24px] text-[16px] leading-[22px] md:text-[20px] md:leading-[28px] text-[#CAC6DD]">
              {service.description}
            </p>
            <Link
              href={service.btnLink}
              className="mt-auto flex gap-[6px] items-center font-sora font-[400] m-0 text-[16px] md:text-[20px] md:leading-[20px] text-[#fff]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M9.56132 6.30888C9.94342 5.79006 10.6737 5.67924 11.1926 6.06135C11.5955 6.35813 11.9786 6.65499 12.3123 6.91536C12.9782 7.43512 13.8702 8.15067 14.7655 8.92808C15.6551 9.70046 16.5748 10.5568 17.2812 11.3563C17.6332 11.7547 17.9569 12.1665 18.199 12.5681C18.4217 12.9376 18.6673 13.4453 18.6673 14.0008C18.6673 14.5562 18.4217 15.0641 18.199 15.4336C17.9569 15.8351 17.6332 16.2468 17.2812 16.6453C16.5748 17.4448 15.6551 18.3011 14.7655 19.0736C13.8702 19.8509 12.9782 20.5664 12.3123 21.0863C11.9786 21.3466 11.5955 21.6435 11.1926 21.9403C10.6738 22.3224 9.94342 22.2115 9.56132 21.6927C9.40772 21.4841 9.33379 21.2415 9.334 21.0009L9.33398 14.0008V7.00073C9.33379 6.76017 9.40772 6.51743 9.56132 6.30888Z"
                  fill="white"
                />
                <path
                  d="M17.2812 11.3563C17.6332 11.7547 17.9569 12.1665 18.199 12.5681C18.4217 12.9376 18.6673 13.4453 18.6673 14.0008C18.6673 14.5562 18.4217 15.0641 18.199 15.4336C17.9569 15.8351 17.6332 16.2468 17.2812 16.6452C16.5748 17.4448 15.6551 18.3011 14.7655 19.0735C13.8702 19.8509 12.9782 20.5664 12.3123 21.0863C11.9786 21.3466 11.5955 21.6435 11.1926 21.9403C10.6737 22.3224 9.94342 22.2115 9.56132 21.6927C9.40772 21.4841 9.33379 21.2414 9.334 21.0009L9.33398 15.1673L15.2267 9.33398C15.9657 9.9938 16.6965 10.6946 17.2812 11.3563Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceSection;
