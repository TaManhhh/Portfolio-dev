import { den, separator } from "@/assets";
import Button from "@/components/button";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useTopContext } from "../page";

const ConTact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const { setComponentTop } = useTopContext()

  useEffect(() => {
    setComponentTop((prevState:any) => ({
      ...prevState,
      contactTop: contactRef.current?.offsetTop || 0, 
    }));
  }, []);

  return (
    <div
      className="container mx-auto px-4 py-[70px] "
      id="contact"
      ref={contactRef}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="lg:text-[30px] text-[25px] font-bold tracking-[11px] border-[8px] px-[30px] lg:px-[50px] py-[20px] border-black">
          CONTACT
        </div>
        <div className="w-[70%] mt-[75px]">
          <p className="text-center ">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
        </div>
        <Image src={separator} alt="" className="mt-[75px]" />
        <form className="max-w-[630px] input w-full mt-[100px] p-2 flex flex-col gap-6 justify-center items-center">
          <input
            placeholder="ENTER YOUR NAME*"
            className="w-full h-[50px] input border-b-4 border-l-4 border-[#000] px-3"
          />
          <input
            placeholder="ENTER YOUR EMAIL*"
            className="w-full h-[50px] input border-b-4 border-l-4 border-[#000] px-3"
          />
          <textarea
            rows={5}
            placeholder="ENTER YOUR NAME*"
            className="w-full border-b-4 input border-l-4 border-[#000] p-3"
          />
          <Button className="w-[120px] py-2 bg-[rgb(2,0,36)]">SUBMIT</Button>
        </form>
      </div>
    </div>
  );
};

export default ConTact;
