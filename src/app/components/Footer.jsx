"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import fbIcon from "../../../public/images/projects/Community icon-3.svg";
import telegramIcon from "../../../public/images/projects/Community icon-2.svg";
import instaIcon from "../../../public/images/projects/Community icon-1.svg";
import twitterIcon from "../../../public/images/projects/Community icon.svg";

const navLinks = [
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "Pricing",
    path: "#pricing",
  },
  {
    title: "How to use",
    path: "#how-to-use",
  },
];
const SocialLink = [
  {
    icon: fbIcon,
    path: "#",
  },
  {
    icon: telegramIcon,
    path: "#",
  },
  {
    icon: instaIcon,
    path: "#",
  },
  {
    icon: twitterIcon,
    path: "#",
  },
];

const Footer = () => {
  const router = useRouter();
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
    router.push(targetId);
  };
  return (
    <footer className="footer z-10 text-white">
      <div className="max-w-[1320px] m-auto py-[20px] md:pb-[40px] flex flex-col md:flex-row items-center justify-between border border-b-[#33353F] border-l-transparent border-r-transparent border-t-transparent">
        <Link
          href={"/"}
          className="text-[12px] leading-[20px] uppercase text-white font-sora font-[600]"
        >
          <Image
            src="/images/logo.png"
            width={200}
            height={35}
            alt="brand image"
          />
        </Link>
        <ul className="flex p-4 pb-0 md:p-0 md:flex-row space-x-2 md:space-x-8 mt-0">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-[12px] leading-[20px] uppercase text-[#CAC6DD] hover:text-white font-sora font-[600]"
            >
              <a href={link.path} onClick={(e) => handleScroll(e, link.path)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[1320px] m-auto py-[20px] items-center flex flex-col-reverse md:flex-row justify-between border border-b-[#33353F] border-l-transparent border-r-transparent border-t-transparent">
        <p className="font-sora font-[400] text-[14px] leading-[20px] text-[#CAC6DD]">
          © identityhub 2024. All rights reserved
        </p>
        <ul className="flex p-0 pb-[20px] md:p-4 md:p-0 md:flex-row space-x-8 mt-0">
          {SocialLink.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <Image
                  src={link.icon}
                  width={40}
                  height={40}
                  alt="social icon"
                  className="hover:opacity-80 transition-all"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
