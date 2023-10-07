"use client";
import {
  doubleArrow,
  fbFooter,
  gmailFooter,
  igFooter,
  inFooter,
} from "@/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] pb-[200px] pt-[40px] flex flex-col justify-center items-center text-[#fff]">
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <Image src={doubleArrow} alt="" />
        <p className="font-bold tracking-[2.781px] mt-[7px]">BACK TO TOP</p>
      </div>
      <div className="flex gap-4 mt-[45px]">
        <Image src={fbFooter} alt="" width={30} height={30} />
        <Image src={inFooter} alt="" width={30} height={30} />
        <Image src={igFooter} alt="" width={30} height={30} />
        <Image src={gmailFooter} alt="" width={30} height={30} />
      </div>
      <div className="mt-[45px]">
        <p className="text-[18px]">
          <b>@2023 Ta Van Manh </b>All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
