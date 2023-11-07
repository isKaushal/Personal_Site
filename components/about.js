import Button from "./button.js"
import Heading from "./heading"
import Image from "next/image"

// components
import { Brefcase } from "../components/icons.js"
import Section from "@/components/section"
import SkillCounters from "./skillcounter.js"

// images
import ProfileImg from "../public/profile-img.jpg"

function Infos() {
    const data = [
        {
            label: "First Name",
            value: "Kaushal",
        },
        {
            label: "Last Name",
            value: "Kumar Soni",
        },
        {
            label: "Age",
            value: "21 Years",
        },
        {
            label: "Nationality",
            value: "Indian",
        },
        {
            label: "Freelance",
            value: "Available",
        },
        {
            label: "Address",
            value: "Jaipur, Rajasthan, India",
        },
        {
            label: "Contact",
            value: "+91 9799170635",
        },
        {
            label: "Email",
            value: "kaushalkumarsoni69@gmail.com",
        },
        {
            label: "Skype",
            value: "isKaushal",
        },
        {
            label: "Language",
            value: "English, Hindi",
        },
    ]

    return (
        <div className="w-full grid grid-cols-12">
            {data.map((data, index) => {
                return (
                    <div
                        className=" col-span-12 lg:col-span-6 my-3"
                        key={index}
                    >
                        <h6 className="text-gray-400 text-sm">
                            {data.label}:{" "}
                            <span className="text-white ">{data.value}</span>
                        </h6>
                    </div>
                )
            })}
        </div>
    )
}

function CarrierInfo() {
    const data = [
        {
            number: "1.4",
            title: "YEARS OF EXPERINCE",
        },
        {
            number: "5",
            title: "COMPLETED PROJECTS",
        },
        {
            number: "12",
            title: "HAPPY CUSTOMERS",
        },
        {
            number: "0",
            title: "AWARDS WON",
        },
    ]

    return (
        <div className="w-full grid grid-cols-12 gap-y-8  sm:gap-8">
            {data.map((data, index) => {
                return (
                    <div
                        className="border-2 border-clr-gray rounded-md p-8 col-span-12 sm:col-span-6"
                        key={index}
                    >
                        <h3 className="text-5xl text-clr-yellow font-semibold pr-4 relative after:content-['+'] after:text-3xl after:text-clr-yellow afte:right-0 after:-top-0 after:absolute after:font-light ">
                            {data.number}
                        </h3>
                        <h6 className="text-white w-40 text-[20px] relative pl-16 before:content-[''] before:w-10 before:h-[1px] before:bg-gray-400 before:rounded-full before:absolute before:top-4 before:left-0">
                            {data.title}
                        </h6>
                    </div>
                )
            })}
        </div>
    )
}

function Skills() {
    const data = [
        {
            name: "HTML",
            percentage: 70,
        },
        {
            name: "CSS",
            percentage: 70,
        },
        {
            name: "JavaScript",
            percentage: 50,
        },
        {
            name: "Jquery",
            percentage: 30,
        },
        {
            name: "ReactJS",
            percentage: 40,
        },
        {
            name: "NextJS",
            percentage: 40,
        },
        {
            name: "NodeJs",
            percentage: 20,
        },
        {
            name: "EJs",
            percentage: 10,
        },
        // {
        //     name: "Redux",
        //     percentage: 5,
        // },
    ]

    return (
        <>
            {data.map((data) => (
                <div className=" col-span-6 md:col-span-4 lg:col-span-3 flex justify-center items-center">
                    <SkillCounters end={data.percentage} label={data.name} />
                </div>
            ))}
        </>
    )
}

function Experince() {
    const data = [
        {
            year: "2015-PRESENT",
            position: "Frontend Developer",
            where: "Test n Track",
            paragraph:
                "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
        },
        {
            year: "2015",
            position: "Frontend Developer",
            where: "Test n Track",
            paragraph:
                "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
        },
        {
            year: "2015",
            position: "Frontend Developer",
            where: "Test n Track",
            paragraph:
                "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
        },
    ]

    return (
        <>
            {data.map((data) => {
                return (
                    <div className="p-8 col-span-12 lg:col-span-6 relative before:content-[''] before:w-[1px] before:h-[80%] before:bg-gray-700 before:absolute before:left-[3.7rem]">
                        <div className="w-full flex ">
                            <div className="rounded-full w-10 h-10 flex justify-center items-center text-white bg-clr-yellow text-lg mx-2 z-[1]">
                                <Brefcase />
                            </div>
                            <div className="flex items-center mx-2">
                                <h2 className="text-sm  text-gray-400 p-1 px-4 rounded-full bg-clr-gray ">
                                    {data.year}
                                </h2>
                            </div>
                        </div>
                        <div className="pl-16 ">
                            <div className="text-white flex items-center text-sm md:text-xl mb-1">
                                <h3 className="">{data.position}</h3>
                                <span className="bg-white w-4 h-0.5 mx-2"></span>
                                <span className="text-gray-400">
                                    {data.where}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm ">
                                {data.paragraph}
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default function About() {
    return (
        <>
            <Section style={{ marginBottom: "0rem" }}>
                <Heading white="about" yellow="me" blur="resume" />
                <div className="py-14  lg:flex  ">
                    <div className="w-full lg:w-2/4 py-4 ">
                        <h2 className="text-white text-3xl md:m-6 font-semibold ">
                            PERSONAL INFOS
                        </h2>
                        <div className="flex justify-center py-8 lg:hidden">
                            <Image
                                src={ProfileImg}
                                width={200}
                                height={200}
                                quality={100}
                                alt="Profile Image"
                                style={{
                                    borderRadius: "100%",
                                    height: "100%",
                                    aspectRatio: "1/1",
                                }}
                            />
                        </div>
                        <Infos />
                        <div className="my-8">
                            <Button label="Download CV" />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/4 py-4">
                        <CarrierInfo />
                    </div>
                </div>
            </Section>

            <Section style={{ margin: "0rem", padding: "0rem" }}>
                <div className="flex justify-center">
                    <hr className="bg-clr-gray h-1 w-3/4 opacity-30 " />
                </div>
            </Section>

            <Section style={{ margin: "0rem" }}>
                <div className="pt-14">
                    <h2 className="text-white text-5xl mb-6 font-semibold text-center ">
                        MY SKILLS
                    </h2>
                    <div className="w-full grid grid-cols-12 pb-20">
                        <Skills />
                    </div>
                </div>
            </Section>

            <Section style={{ margin: "0rem", padding: "0rem" }}>
                <div className="flex justify-center">
                    <hr className="bg-clr-gray h-1 w-3/4 opacity-30 " />
                </div>
            </Section>

            <Section style={{ marginTop: "0rem" }}>
                <div className="pt-14">
                    <h2 className="text-white text-3xl md:text-5xl mb-6 font-semibold text-center ">
                        EXPERIENCE & EDUCATION
                    </h2>
                    <div className="w-full grid grid-cols-12 pb-20">
                        <Experince />
                    </div>
                </div>
            </Section>
        </>
    )
}
