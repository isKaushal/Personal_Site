import Image from "next/image";
import styled from "styled-components";

// images
import ProfileImg from "../public/profile-img.jpg";

// components
import Button from "../components/button";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className=" w-full h-full relative">
      <div className="bg-clr-yellow 2xl:w-[30rem]  w-[25rem] h-[150vh] 2xl:-translate-x-32 -translate-x-20 -translate-y-20 -rotate-12"></div>
      <div className="absolute w-screen h-screen top-0 items-center flex">
        <div className=" w-full h-full items-center flex">
          <div className=" w-full flex h-[85%] absolute">
            <div className=" h-full px-14 flex ">
              <div
                style={{
                  overflow: "hidden",
                  width: "80%",
                  height: "100%",
                  borderRadius: "40px",
                  boxShadow: "1px 1px 20px rgba(0,0,0,0.7)",
                }}
              >
                <Image
                  src={ProfileImg}
                  alt="Profile Img"
                  style={{
                    height: "100%",
                    aspectRatio: "1/1",
                  }}
                />
              </div>
            </div>

            <div className=" w-2/4  px-4 flex items-center"></div>
          </div>
          <div className="flex h-2/4 absolute">
            <div className="w-1/2 px-4 flex justify-center relative"></div>

            <div className="w-[42%] px-4 flex items-center pl-14">
              <div>
                <h1 className="text-[48px] text-clr-yellow font-semibold font-family pl-16 relative font-family leading-[3.5rem] tracking-wide before:content-[''] before:bg-clr-yellow before:w-10 before:h-1 before:absolute before:left-0 before:rounded-full before:top-[25%] ">
                  I'M KAUSHAL SONI <br /> <span className="text-white">WEB DEVELOPER</span>
                </h1>
                <p className="text-white text-lg py-6 leading-10 tracking-wide">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sint aliquam veniam iusto ab, nihil
                  iure facilis quod? Explicabo, delectus eum ut dolorum ad sunt ratione doloribus totam eius? Qui.
                </p>
                <Button label="More About Me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
