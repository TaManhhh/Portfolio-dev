"use client";
import { aboutme, it, logo, separator } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useTopContext } from "../page";
import "./style.css";
const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const { setComponentTop } = useTopContext();

  useEffect(() => {
    setComponentTop((prevState: any) => ({
      ...prevState,
      aboutTop: aboutRef.current?.offsetTop || 0,
    }));
  }, []);
  return (
    <div
      className="container mx-auto px-4 py-[75px] "
      ref={aboutRef}
      id="about"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="lg:text-[30px] text-[25px] font-bold tracking-[11px] border-[8px] px-[30px] lg:px-[50px] py-[20px] border-black">
          ABOUT ME
        </div>
        <div className="w-[70%] mt-[75px]">
          <p className="text-center ">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
        </div>
        <Image src={separator} alt="" className="mt-[75px]" />
        <div className="lg:grid lg:grid-cols-2 gap-6 mt-[40px]  ">
          <div className="flex justify-center items-center">
            <div className="aboutme-card max-w-[500px] w-full text-[#fff] h-[640px] rounded-2xl py-[40px] flex flex-col justify-center items-center gap-4">
              <Image src={aboutme} alt="" width={290} height={250} />
              <p className="font-semibold lg:text-[28px] text-[18px]">HELLO EVERYONE !!!!</p>
              <div className="w-[250px] h-[2px] bg-white" />
              <p className="font-semibold text-[28px]">Front-end Developer</p>
              {/* <ul>
                <li>
                  <a href="https://github.com/atuljustano">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/atulkprajapati2000/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/atuljustano">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="px-[30px] relative">
            <div></div>
            <p className="text-[25px] lg:text-[60px] font-bold ">HELLO EVERYONE !</p>
            <div className="text-[20px] mt-[20px] flex flex-col gap-3">
              <p>Name : Ta Van Manh</p>
              <p>Birthday : Ta Van Manh</p>
              <p>Born : Ta Van Manh</p>
              <p>Living : Ta Van Manh</p>
              <p className="text-justify">
                Im a student majoring in construction engineering at HO CHI MINH
                City University of Technology and have a longstanding passion
                for mathematics, design and especially PROGRAMMING .Im a
                SELF-TAUGHT UI developer looking for a beginner position. Hope
                to be able to learn and gain experience working as a front-end
                developer oriented to a FULL-STACK developer through many
                projects.
              </p>
            </div>
            <div className="absolute right-[15%] top-[10%] opacity-5">
              <Image src={logo} alt="" className="img-it " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
