import Image from "next/image";
import styled from "styled-components";

// images
import ProfileImg from "../public/profile-img.jpg";

// components
import Button from "../components/button";

const FontsStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  .font-family {
    font-family: "Poppins", sans-serif;
  }
`;

export default function Home() {
  return (
    <FontsStyles className="overflow-hidden w-full h-full relative">
      <div className="bg-clr-yellow 2xl:w-[30rem]  w-[25rem] h-[150vh] 2xl:-translate-x-32 -translate-x-20 -translate-y-20 -rotate-12"></div>
      <div className="absolute w-screen h-screen top-0 items-center flex">
        <div className="flex h-2/4">
          <div className="w-1/2 px-4 flex justify-center relative">
            <Image
              src={ProfileImg}
              alt="Profile Img"
              width={500}
              height={700}
              style={{
                aspectRatio: "1/1",
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="w-[40%] px-4 flex items-center">
            <div>
              <h1 className="text-5xl text-clr-yellow font-black font-family pl-14 relative font-family leading-[3.5rem] before:content-[''] before:bg-clr-yellow before:w-10 before:h-1 before:absolute before:left-0 before:rounded-full before:top-[25%] ">
                I'M KAUSHAL SONI <br /> <span className="text-white">WEB DEVELOPER</span>
              </h1>
              <p className="text-white text-lg py-6 leading-10 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sint aliquam veniam iusto ab, nihil iure
                facilis quod? Explicabo, delectus eum ut dolorum ad sunt ratione doloribus totam eius? Qui.
              </p>
              <Button label="More About Me" />
            </div>
          </div>
        </div>
      </div>
    </FontsStyles>
  );
}
