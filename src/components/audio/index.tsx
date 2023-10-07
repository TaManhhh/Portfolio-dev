import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import Image from "next/image";
import { arrow, pause, play } from "@/assets";
import { songdatas } from "./songdata";
const Audio = () => {
  const [isplay, setIsPlay] = useState(true);
  const [songs, setSongs] = useState(songdatas);
  const [currentSong, setCurrentSong] = useState(songdatas[0]);
  console.log("🚀 ~ file: index.tsx:10 ~ Audio ~ currentSong:", currentSong)
  const audioElem = useRef<HTMLAudioElement | null>(null);
  const PlayPause = () => {
    setIsPlay(!isplay);
  };
  useEffect(() => {
    if (isplay) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }
  }, [isplay]);
  const onPlaying = () => {
    const duration = audioElem.current?.duration;
    const ct = audioElem.current?.currentTime;
    if (duration !== undefined && ct !== undefined) {
      setCurrentSong(({
        ...currentSong,
        progress: ct / duration * 100,
        length: duration,
      }));
    }

  }
  return (
    <div className="absolute bottom-[5%] right-[5%] max-w-[250px] w-full">
      <div className="bg-white w-full grid grid-cols-3 z-10 rounded-xl h-[60px] relative  px-[20px] py-[5px]">
        <div className="relative w-full h-full col-span-1">
          <div className={`w-[67px] h-[67px] border-indigo-600 rounded-full flex justify-center items-center absolute top-[-50%] left-[0%] ${isplay ? " DVD-active " : "DVD-inactive "}`} >
            <div className={`w-[65px] h-[65px] DVD  border-indigo-600 rounded-full flex justify-center items-center   ${isplay ? " rotate" : " "}`} >
              <div className={`w-[15px] h-[15px] bg-white border-2 border-gray-400 rounded-full flex justify-center items-center ${isplay ? "rotate-animation " : ""}`}>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center col-span-2">
          <div className="flex gap-4">
            <button>
              <Image
                src={arrow}
                height={30}
                width={30}
                alt=""
                className="rotate-180"
              />
            </button>
            {isplay ? (
              <button onClick={PlayPause}>
                <Image src={pause} height={30} width={30} alt="" className="" />
              </button>
            ) : (
              <button onClick={PlayPause}>
                <Image src={play} height={30} width={30} alt="" className="" />
              </button>
            )}
            <button>
              <Image src={arrow} height={30} width={30} alt="" className="" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-3 absolute w-[98%] ease-in rounded-t-lg h-[60px] right-[1%] left-[1%] z-0 bottom-0 px-[10px] py-[5px] bg-slate-300 ${isplay ? "song-detail-active" : "song-detail-inactive"
          }`}
      >
        <div className="col-span-1"></div>
        <div className="col-span-2 px-5 flex flex-col gap-0">
          <p className="text-[13px]">
            <b>{currentSong.name}</b>
          </p>
          <p className="text-[12px]">{currentSong.singer}</p>
          <div className="w-full h-2 bg-white rounded-3xl relative">
            <div className={`absolute w-[$${currentSong.progress + "%"}] h-full bg-black rounded-3xl`} /></div>
          <audio
            src={currentSong.url}
            // src='http://streaming.tdiradio.com:8000/house.mp3'
            onTimeUpdate={onPlaying}
            ref={audioElem}
          />
        </div>
      </div>
    </div>
  );
};

export default Audio;
