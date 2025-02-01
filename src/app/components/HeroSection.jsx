"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-auto md:min-h-screen pb-[30px] md:pb-[40px] lg:pb-[70px] xl:pb-[100px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="text-center max-w-[992px] mx-auto">
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
                Secure your data
              </Link>
            </div>
            <h1 className="font-sora text-[30px] leading-[38px] mt-[15px] md:text-[34px] md:leading-[40px] lg:text-[60px] lg:leading-[72px] font-[600] bg-clip-text text-transparent bg-[linear-gradient(180deg,#F33CC0_13.43%,#4349FF_73.37%)]">
              Identity-hub is a better way to achieve
              <span
                className="underline"
                style={{
                  backgroundImage: "url('/images/projects/Vector 2.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                }}
              >
                {" "}
                privacy
              </span>
            </h1>
            <p className="font-aeonik  mt-[24px] mb-[28px] text-[18px] leading-[24px] md:text-[24px] md:leading-[34px] text-[#CAC6DD]">
              Make your data invisible by generating unlimited identities. The
              next-level in privacy protection for online and travel.
            </p>
            <div className="mb-[50px] flex justify-center gap-[16px]">
              <div
                className="flex w-auto inline-flex rounded-[12px]"
                style={{
                  boxShadow:
                    "0px 4px 50px 0px #9F64EF66, 0px 0px 12px 0px #FFFFFF33 inset",
                }}
              >
                <Link
                  href=""
                  className="linear_btn font-aeonik border border-[1px] border-transparent 
                  text-[16px] font-[400] leading-[16px] flex-1 font-bold text-[#CAD1E9] bg-[#0F0B15] px-[20px] py-[12px] rounded-[12px] transition-all duration-300 ease-linear"
                  style={{
                    background:
                      "linear-gradient(#0F0B15 0 0) padding-box, linear-gradient(45deg, #090EDB, #8D1EA2) border-box",
                  }}
                >
                  Start free trial
                </Link>
              </div>
              <Link
                href=""
                className="use_linear_btn
                font-aeonik
                  px-[20px] py-[12px]
                  rounded-[12px]
                  overflow-hidden
                  text-[16px] font-[500] leading-[16px] 
                  text-white 
                  backdrop-blur-md
                  border border-[1px] border-[#FFE1E1]
                  transition-all duration-300 ease-linear"
                style={{
                  background:
                    "linear-gradient(87.43deg, #090EDB 8.8%, #DA24BB 84.38%)",
                }}
              >
                Use It Now
              </Link>
            </div>
          </div>
          <div className="hero_center_main relative flex items-center justify-center min-h-[440px]">
            <div className="hero_center_img absolute">
              <Image
                src="/images/projects/productivity.png"
                width={485}
                height={435}
                alt="brand image"
                className="relative z-10"
              />
            </div>
            <div className="hero_center_other relative flex items-center justify-center">
              <div
                className="flex w-[220px] gap-[16px] p-[10px] hero_arround_item absolute top-[50%] left-[50%]
                bg-[linear-gradient(137.34deg,rgba(27,28,54,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]
                border border-transparent
                border-[1px] border-image-[linear-gradient(278.56deg,rgba(255,255,255,0.07)_0.8%,rgba(255,255,255,0.15)_97.41%)]
                backdrop-blur-[11.7px] rounded-[16px]"
                style={{
                  position: "absolute",
                  margin: "-10em",
                  transform: "rotate(-170deg) translate(20em) rotate(170deg)",
                }}
              >
                <Image
                  src="/images/projects/Frame-1.svg"
                  width={44}
                  height={44}
                  alt="icon image"
                />
                <div className="text-left">
                  <h5 className="text-[#CAC6DD] text-[14px] leading[17px]">
                    One-time passcode
                  </h5>
                  <p className="text-[#CAC6DD] text-[14px] leading[17px]">
                    Kas3345-r32
                  </p>
                </div>
              </div>
              <div
                className="flex w-[220px] gap-[16px] p-[10px] hero_arround_item absolute top-[50%] left-[50%]
                bg-[linear-gradient(137.34deg,rgba(27,28,54,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]
                border border-transparent
                border-[1px] border-image-[linear-gradient(278.56deg,rgba(255,255,255,0.07)_0.8%,rgba(255,255,255,0.15)_97.41%)]
                backdrop-blur-[11.7px] rounded-[16px]"
                style={{
                  position: "absolute",
                  margin: "-6em",
                  transform: "rotate(-20deg) translate(23em) rotate(20deg)",
                }}
              >
                <Image
                  src="/images/projects/Frame-2.svg"
                  width={44}
                  height={44}
                  alt="icon image"
                />
                <div className="text-left">
                  <h5 className="text-[#CAC6DD] text-[14px] leading[17px]">
                    Phone numbers
                  </h5>
                  <p className="text-[#CAC6DD] text-[14px] leading[17px]">
                    +1 (456) 453-3456
                  </p>
                </div>
              </div>{" "}
              <div
                className="flex w-[220px] gap-[16px] p-[10px] hero_arround_item absolute top-[50%] left-[50%]
                bg-[linear-gradient(137.34deg,rgba(27,28,54,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]
                border border-transparent
                border-[1px] border-image-[linear-gradient(278.56deg,rgba(255,255,255,0.07)_0.8%,rgba(255,255,255,0.15)_97.41%)]
                backdrop-blur-[11.7px] rounded-[16px]"
                style={{
                  position: "absolute",
                  margin: "-6em",
                  transform: "rotate(-210deg) translate(27em) rotate(210deg)",
                }}
              >
                <Image
                  src="/images/projects/Frame-3.svg"
                  width={44}
                  height={44}
                  alt="icon image"
                />
                <div className="text-left">
                  <h5 className="text-[#CAC6DD] text-[14px] leading[17px]">
                    Credit card
                  </h5>
                  <p className="text-[#CAC6DD] text-[14px] leading[17px]">
                    123 456 789 1243
                  </p>
                </div>
              </div>{" "}
              <div
                className="flex w-[220px] gap-[16px] p-[10px] hero_arround_item absolute top-[50%] left-[50%]
                bg-[linear-gradient(137.34deg,rgba(27,28,54,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]
                border border-transparent
                border-[1px] border-image-[linear-gradient(278.56deg,rgba(255,255,255,0.07)_0.8%,rgba(255,255,255,0.15)_97.41%)]
                backdrop-blur-[11.7px] rounded-[16px]"
                style={{
                  position: "absolute",
                  margin: "-8em",
                  transform: "rotate(33deg) translate(28em) rotate(-33deg)",
                }}
              >
                <Image
                  src="/images/projects/Frame-4.svg"
                  width={44}
                  height={44}
                  alt="icon image"
                />
                <div className="text-left">
                  <h5 className="text-[#CAC6DD] text-[14px] leading[17px]">
                    Email address
                  </h5>
                  <p className="text-[#CAC6DD] text-[14px] leading[17px]">
                    davidjx@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
