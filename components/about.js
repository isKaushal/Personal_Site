import Button from "./button.js"
import Heading from "./heading"

// components
import Section from "@/components/section"
import SkillCounters from "./skillcounter.js"

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
                    <div className="col-span-6 my-3" key={index}>
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
        <div className="w-full grid grid-cols-12 gap-8">
            {data.map((data, index) => {
                return (
                    <div
                        className="border-2 border-clr-gray rounded-md p-8 col-span-6"
                        key={index}
                    >
                        <h3 className="text-5xl text-clr-yellow font-semibold pr-4 relative after:content-['+'] after:text-4xl after:text-clr-yellow afte:right-0 after:-top-0 after:absolute after:font-normal ">
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
        {
            name: "Redux",
            percentage: 5,
        },
    ]

    return (
        <>
            {data.map((data) => (
                <div className="col-span-3 flex justify-center items-center">
                    <SkillCounters end={data.percentage} label={data.name} />
                </div>
            ))}
        </>
    )
}

export default function About() {
    return (
        <>
            <Section>
                <Heading white="about" yellow="me" blur="resume" />
                <div className="pt-28 flex">
                    <div className="w-2/4 py-4 ">
                        <h2 className="text-white text-3xl mb-6 font-semibold ">
                            PERSONAL INFOS
                        </h2>
                        <Infos />
                        <div className="my-8">
                            <Button label="Download CV" />
                        </div>
                    </div>
                    <div className="w-2/4 py-4">
                        <CarrierInfo />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="py-28">
                    <h2 className="text-white text-5xl mb-6 font-semibold text-center ">
                        MY SKILLS
                    </h2>
                    <div className="w-full grid grid-cols-12 py-20">
                        <Skills />
                    </div>
                </div>
            </Section>
        </>
    )
}
