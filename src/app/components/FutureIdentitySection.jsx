"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FutureIdentitySection = () => {
  return (
    <motion.div
      id="partners"
      className="relative py-[30px] md:py-[40px] lg:py-[70px] xl:py-[100px] max-w-[1320px] m-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-50 w-full h-[50%] z-[0]">
        <Image
          src="/images/projects/Pattern.png"
          alt=""
          width={500}
          height={500}
          objectFit="contain"
          className="m-auto"
        />
      </div>
      <div className="max-w-[750px] m-auto text-center">
        <h2 className="font-sora text-[30px] leading-[38px] md:text-[34px] md:leading-[42px] lg:text-[60px] lg:leading-[72px] font-[600] text-white">
          Be part of the future of
          <span
            className=""
            style={{
              backgroundImage: "url('/images/projects/Vector 2.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "95%",
              backgroundPositionY: "bottom",
            }}
          >
            {" "}
            IdentityHub
          </span>
        </h2>
        <p className="font-sora  mt-[24px] mb-[28px] text-[16px] leading-[22px] md:text-[20px] md:leading-[32px] text-[#CAC6DD]">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>
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
          Start free trial
        </Link>
      </div>
    </motion.div>
  );
};

export default FutureIdentitySection;
