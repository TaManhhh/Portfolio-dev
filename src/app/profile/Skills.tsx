"use client";
import { reactjs, separator } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { html, sass, js, ts, git, css } from "@/assets";
import { useTopContext } from "../page";
import Button from "@/components/button";
const Skills = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const { setComponentTop } = useTopContext();

  useEffect(() => {
    setComponentTop((prevState: any) => ({
      ...prevState,
      skillsTop: skillsRef.current?.offsetTop || 0,
    }));
  }, []);
  const skill = [
    { id: 1, img: html, title: "HTML" },
    { id: 2, img: sass, title: "SASS" },
    { id: 3, img: js, title: "JS" },
    { id: 4, img: ts, title: "TS" },
    { id: 5, img: git, title: "GIT" },
    { id: 6, img: css, title: "CSS" },
    { id: 7, img: reactjs, title: "REACTJS" },
  ];
  return (
    <div
      className="container mx-auto px-4 py-[75px]"
      ref={skillsRef}
      id="skill"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="lg:text-[30px] text-[25px] font-bold tracking-[11px] border-[8px] px-[30px] lg:px-[50px] py-[20px] border-black">
          SKILLS
        </div>
        <Image src={separator} alt="" className="mt-[75px]" />
        <div className="mt-[80px]">
          {/* right box */}
          <div className="right flex gap-9 flex-wrap justify-center items-center ">
            {skill.map((e: any) => (
              <Button
                key={e.id}
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" skill w-[10rem] h-[10rem] flex flex-col justify-center items-center rounded-lg shadow-2xl"
              >
                <Image
                  src={e.img}
                  width={112}
                  height={130}
                  alt={e.title}
                  className=" object-cover rounded-lg "
                />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
