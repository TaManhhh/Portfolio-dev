"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./style.css";
import { fbHeader, github, gmail, imgheader, it, logo } from "@/assets";
import Image from "next/image";
import Button from "@/components/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Audio from "@/components/audio";
const Header = () => {
  const logoHeader = [
    {
      id: 1,
      img: gmail,
      title: "gmail",
    },
    {
      id: 2,
      img: github,
      title: "github",
    },
    {
      id: 3,
      img: fbHeader,
      title: "facebook",
    },
  ];
  const CV_URL = "http://localhost:3000/Ta-Van-Manh.pdf";
  const handleDownload = (url: any) => {
    const fileName = url.split("/").pop();
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.setAttribute("download", fileName);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  return (
    <main>
      <div className="profile overflow-hidden relative h-[90vh]" id="home">
        <div className="quadrangle"></div>
        <div className="lg:grid lg:grid-cols-12 flex h-full">
          <div className="lg:col-span-5">
            <div className="flex justify-end items-center w-full h-full">
              <div className="flex flex-col justify-between  w-[70%] h-[50%]">
                <div>
                  <p className="text-[40px] font-bold">Hi, I am</p>
                </div>
                <div>
                  <p className="text-[80px] font-bold "> Tạ Văn Mạnh</p>
                  <p className="text-[25px] text-[#909090] font-bold ">
                    Front-end Developer
                  </p>
                </div>

                <div className="flex gap-4">
                  {logoHeader.map((e: any) => (
                    <Button key={e.id}>
                      <div className="bg-[#C4C4C4] logoheader p-2">
                        <Image src={e.img} alt="" width={35} height={34} />
                      </div>
                    </Button>
                  ))}
                </div>
                <div className="float-left">
                  <Button
                    onClick={() => {
                      handleDownload(CV_URL);
                    }}
                    className="flex px-3 bg-[rgb(2,0,36)] justify-center items-center py-2"
                  >
                    <p>Download CV</p>
                    <FontAwesomeIcon
                      icon={faDownload}
                      size="xl"
                      style={{ color: "#ffff" }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex profile-header-right relative">
            <div className="absolute lg:right-[40%] right-[10%3] bottom-0 w-[530px] h-[650px]  order-2 lg:order-1">
              <Image
                src={imgheader}
                fill
                alt="Tạ Văn Mạnh "
              />
            </div>
            <div className="absolute right-[10%] top-[5%] w-[200px] order-1 lg:order-2 h-[200px] lg:w-[350px] lg:h-[350px]">
              <Image
                src={logo}
                fill
                alt="Tạ Văn Mạnh "
                object-fit="cover"
              />
            </div>
            <Audio />
          </div>
        </div>
      </div>
      <div className=" objective overflow-hidden py-[50px] relative text-[#fff]">
        <div className="container mx-auto px-4 ">
          <div className="lg:w-[70%] w-full relative z-10">
            <p className="text-[30px] mb-[20px] font-bold tracking-[5.561px]">
              OBJECTIVE
            </p>
            <p className="text-justify text-[15px]">
              I am a passionate web developer with a strong grasp of both
              front-end programming languages. My goal is to work in a
              challenging environment to build unique websites and applications,
              optimized for the best user experience. I aspire to apply my
              knowledge in creating innovative solutions, contributing to
              elevate the quality and functionality of web projects. With
              experience working on both personal and team projects, I am
              confident in my ability to interact effectively with team members,
              collaborating with a focused approach to product completion. I am
              always seeking opportunities to learn and enhance my skills in an
              ever-evolving technology landscape. My aim is to be part of an
              innovative development team where I can contribute my ideas and
              expertise to build exceptional web products. I look forward to
              opportunities for career growth and personal development through
              engaging in exciting and challenging projects.
            </p>
          </div>
        </div>
        <div className="absolute z-[0] w-[100%] right-[3%] top-[-3%]">
          <Image src={it} alt="" className="img-it " />
        </div>
      </div>
    </main>
  );
};

export default Header;
