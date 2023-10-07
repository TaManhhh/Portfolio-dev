import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef } from "react";
import { useTopContext } from "../page";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";
import { EffectCards } from "swiper/modules";
// import required modules
import { Scrollbar } from "swiper/modules";
import { separator } from "@/assets";
import Image from "next/image";
const Project = () => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const { setComponentTop } = useTopContext();
  const projects = [
    {
      id: 1,
      nameProject: "Endolife (Trang thương mại điện tử)",
      nameCustomer: "Company project",
      time: "4/2023 - 8/2023",
      description:
        " A website for buying and selling goods with integrated auction functionality.",
      teamSize: 4,
      position: "Fronend Developer",
      responsibility:
        "<p>- Build product category management page, product list <br/>- Optimize code <br/> - Bug Fixing</p>",
      technology: " Reactjs, css, html, ant-design,typescript",
    },
    {
      id: 2,
      time: "4/2023 - 8/2023",
      nameProject: "Endolife (Trang thương mại điện tử)",
      nameCustomer: "Company project",
      description:
        " A website for buying and selling goods with integrated auction functionality.",
      teamSize: 4,
      position: "Fronend Developer",
      responsibility:
        "<p>- Build product category management page, product list <br/>- Optimize code <br/> - Bug Fixing</p>",
      technology: " Reactjs, css, html, ant-design,typescript",
    },
    {
      id: 3,
      time: "4/2023 - 8/2023",
      nameProject: "Endolife (Trang thương mại điện tử)",
      nameCustomer: "Company project",
      description:
        " A website for buying and selling goods with integrated auction functionality.",
      teamSize: 4,
      position: "Fronend Developer",
      responsibility:
        "<p>- Build product category management page, product list <br/>- Optimize code <br/> - Bug Fixing</p>",

      technology: " Reactjs, css, html, ant-design,typescript",
    },
  ];

  useEffect(() => {
    setComponentTop((prevState: any) => ({
      ...prevState,
      projectTop: projectRef.current?.offsetTop || 0,
    }));
  }, []);

  return (
    <div className="container mx-auto px-[70px] py-[70px]"
      id="project"
      ref={projectRef}
    >
      <div
        className="flex flex-col justify-center items-center"

      >
        <div className="lg:text-[30px] text-[25px] font-bold tracking-[11px] border-[8px] px-[30px] lg:px-[50px] py-[20px] border-black">
          PROJECTS
        </div>
        <Image src={separator} alt="" className="mt-[75px]" />
        <div className="mt-[70px] max-w-[680px] w-full px-6">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {projects.map((e: any) => (
              <SwiperSlide key={e.id}>
                <div className=" h-[800px] text-[#000] w-full flex flex-col items-center project-bg lg:px-[40px] px-[20px] py-[50px]">
                  <p className="font-semibold lg:text-[28px]  text-[16px] text-center">
                    {e.nameProject}
                  </p>
                  <p className="text-center opacity-70">{e.time}</p>
                  <div className="h-[1px] bg-black w-[40%] mt-[40px]" />
                  <div className="mt-[40px] lg:text-[20px] text-[14px] flex flex-col gap-3">
                    <p>
                      <b>Name of customer : </b> {e.nameCustomer}
                    </p>
                    <p>
                      <b>Position in project : </b>
                      {e.position}
                    </p>
                    <p>
                      <b>Team size : </b>
                      {e.teamSize}
                    </p>
                    <p>
                      <b>Description project : </b>
                      {e.description}
                    </p>
                    <p>
                      <b>Technology description : </b>
                      {e.technology}
                    </p>
                    <div>
                      <b>Responsibility in project: </b>
                      <div
                        dangerouslySetInnerHTML={{ __html: e.responsibility }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-right mt-auto">{e.id}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
