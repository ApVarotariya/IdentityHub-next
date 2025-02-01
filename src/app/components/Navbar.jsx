"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    title: "Partners",
    path: "#partners",
  },
  {
    title: "About us",
    path: "#about-us",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

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
    <nav className="overflow-hidden rounded-[12px] max-w-[calc(100%-40px)] w-[1200px] fixed mx-auto border border-[#FFFFFF1A] top-0 left-0 right-0 z-[99] bg-[#0F0C1724] bg-opacity-100 mt-[20px] p-[12px]">
      <div className="flex container flex-wrap items-center justify-between mx-auto">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/images/logo.png"
            width={200}
            height={35}
            alt="brand image"
            className="w-[120px] md:w-[130px] lg:w-[150px] xl:w-[200px]"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center pl-3 py-2 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center pl-3 py-2 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex gap-[15px] md:gap:[24px] md:flex-row ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="font-aeonik text-[16px] leading-[18px] md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[20px] block text-[#CAD1E9] md:p-0 hover:text-white"
                  onClick={(e) => handleScroll(e, link.path)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="free_trial_btn rounded-[12px]"
          style={{
            boxShadow:
              "rgba(9, 14, 219, 0.6) 0px 0px 0px 1px, rgba(231, 61, 196, 0.6) 0px 0px 0px 1px",
          }}
        >
          <Link
            href="#"
            className="rounded-[12px] px-[10px] py-[8px] md:px-[20px] md:py-[10px] font-aeonik text-[16px] leading-[16px] md:text-[18px] md:leading-[18px] lg:text-[20px] lg:leading-[20px] block text-[#CAD1E9] hover:text-white"
            style={{
              backdropFilter: "blur(48px)",
              boxShadow: "inset 0px 0px 12px 0px #FFFFFF33",
            }}
          >
            Start your trial
          </Link>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
