"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";

// Import images
import pointImage1 from "../../../public/images/projects/why-choose-1.png";
import pointImage2 from "../../../public/images/projects/why-choose-2.png";
import pointImage3 from "../../../public/images/projects/why-choose-3.png";

const whyChoosePoints = [
  {
    image: pointImage1,
    theme: "#1E21E9",
    title: "Protect Personal information",
    points: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
  },
  {
    image: pointImage2,
    theme: "#7950FF",
    title: "Detailed Reporting",
    points: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
  },
  {
    image: pointImage3,
    theme: "#098709",
    title: "Secure All Data",
    points: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
  },
];

const adjustDarkerColor = (color) => {
  let colorValue = color.replace("#", "");
  let num = parseInt(colorValue, 16);
  let r = (num >> 16) - 120;
  let g = ((num >> 8) & 0x00ff) - 120;
  let b = (num & 0x0000ff) - 120;
  r = r < 0 ? 0 : r;
  g = g < 0 ? 0 : g;
  b = b < 0 ? 0 : b;

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

const WhyChooseSection = () => {
  return (
    <motion.div
      id="features"
      className="relative py-[30px] md:py-[40px] lg:py-[70px] xl:py-[100px] pb-[0] max-w-[1320px] m-auto text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
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
          Features
        </Link>
      </div>
      <h2 className="relative z-[1] text-center m-auto mt-[8px] max-w-[430px] font-sora text-[26px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-[600] text-[#CAD1E9]">
        Why {""}
        <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#F33CC0_13.43%,#4349FF_73.37%)]">
          choose {""}
        </span>
        us
      </h2>
      <p className="relative z-[1] m-auto  text-center max-w-[675px] font-aeonik mt-[24px] mb-[28px] text-[18px] leading-[24px] md:text-[24px] md:leading-[34px] text-[#CAC6DD]">
        We are the only service that provides all 3 services as a packaged
        service
      </p>
      <div className="relative z-[1] flex flex-col">
        {whyChoosePoints.map((item, index) => (
          <div
            key={index}
            className={`mb-[20px] md:mb-[40px] p-[20px] md:[40px] flex flex-col md:flex-row gap-[20px] md:gap-[50px] lg:gap-[100px] rounded-[20px] justify-between items-center 
              backdrop-blur-[16px]`}
            style={{
              boxShadow:
                "0 0 0 2px rgba(16, 17, 50, 0.1), 0 0 0 1px rgba(119, 124, 247, 0.1)",
              background:
                "linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)",
            }}
          >
            <div className="w-full md:w-[calc(50%-25px)] lg:w-[calc(50%-50px)] flex flex-col pl-[50px] md:pl-[60px] relative">
              <div className="absolute top-0 left-0 w-[40px] h-full rounded-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="relative z-[9]"
                >
                  <circle cx="20" cy="20" r="20" fill={item.theme} />
                  <path
                    d="M26 20.5C26 20.5 21.5811 26.5 20 26.5C18.4188 26.5 14 20.5 14 20.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26 13.5001C26 13.5001 21.5811 19.5 20 19.5C18.4188 19.5 14 13.5 14 13.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className="absolute top-0 z-[0] left-[19px] w-[2px] border-2 border-transparent [border-image:linear-gradient(to_bottom,_#FF0000,_#FFA500)_2] h-full"
                  style={{
                    borderImage: `linear-gradient(to bottom, ${
                      item.theme
                    }, ${adjustDarkerColor(item.theme)}) 2`,
                  }}
                ></div>
              </div>
              <h2 className="text-left font-aeonik font-[500] text-[#CAD1E9] text-[22px] leading-[28px] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-[40px] mb-[20px] md:mb-[25px] lg:mb-[42px]">
                {item.title}
              </h2>
              <ul className="list-none">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-left font-aeonik font-[400] mb-[15px] md:mb-[24px] flex gap-[10px] items-center text-[16px] leading-[22px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-[#CAC6DD] last:mb-0"
                  >
                    <div
                      className={`flex items-center justify-center w-[25px] h-[25px] rounded-[20px]`}
                      style={{
                        backgroundColor: `${item.theme}66`,
                        minWidth: "25px",
                      }}
                    >
                      <GiCheckMark size={15} style={{ color: item.theme }} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[calc(50%-25px)] lg:w-[calc(50%-50px)]">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full max-w-[300px] md:max-w-full m-auto h-auto rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseSection;
