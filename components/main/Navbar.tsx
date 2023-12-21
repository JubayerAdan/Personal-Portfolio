import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right, #051937, #1a2b6c, #4e38a0, #9237cb, #e012eb)",
  };
  const fileUrl =
    "https://drive.google.com/u/0/uc?id=1t-giGCcGKHjd5WCuVQMpcBAsDe_xjlwK&export=download";
  function generateRandomCode() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const randomCharacter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    ); // Random uppercase letter
    const randomNumber = Math.floor(Math.random() * 10); // Random single digit

    const code = `${year}${month}${day}_${hours}${minutes}_${randomCharacter}${randomNumber}`;

    return code;
  }
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Jubayer Ahmed
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}

          <Link
            href={fileUrl}
            download={`Resume-${() => generateRandomCode()}.pdf`}
          >
            <button
              className="btn text-white border-none"
              style={gradientStyle}
            >
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
