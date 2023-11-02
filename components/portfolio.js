import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// components
import Heading from "../components/heading.js"
import Section from "./section.js"
import { useState } from "react"
import styled from "styled-components"

const PortfolioWrap = styled.div`
    & .span_wrap:hover .span {
        opacity: 1;
        transform: translateY(-0px);
    }

    & .span {
        opacity: 0;
        color: white;
        position: absolute;
        transition: 450ms ease-in-out;
        font-weight: 500;
        font-size: 20px;
        transform: translateY(-20px);
    }
`

export default function Portfolio() {
    const [isFilter, setIsFilter] = useState("")

    const data = [
        {
            id: 0,
            link: "",
            catagory: "webapp",
            wesitename: "Project-1",
            img: "/portfolio/1.jpg",
        },
        {
            id: 1,
            link: "",
            catagory: "webapp",
            wesitename: "Project-2",
            img: "/portfolio/2.jpg",
        },
        {
            id: 2,
            link: "",
            catagory: "webapp",
            wesitename: "Project-3",
            img: "/portfolio/3.jpg",
        },
        {
            id: 3,
            link: "",
            catagory: "website",
            wesitename: "Project-4",
            img: "/portfolio/4.jpg",
        },
        {
            id: 4,
            link: "",
            catagory: "website",
            wesitename: "Project-5",
            img: "/portfolio/5.jpg",
        },
        {
            id: 5,
            link: "",
            catagory: "website",
            wesitename: "Project-6",
            img: "/portfolio/6.jpg",
        },
    ]

    return (
        <PortfolioWrap>
            <Section style={{ marginBottom: "0rem", paddingBottom: "0rem" }}>
                <Heading blur="works" white="my" yellow="portfolio" />
            </Section>

            <Section style={{ marginTop: "0rem" }}>
                <div className="flex justify-center py-8 text-white w-full text-xl">
                    <h3
                        onClick={() => setIsFilter("")}
                        className={`${
                            isFilter === "" ? "text-clr-yellow mx-2" : "mx-2"
                        } cursor-pointer`}
                    >
                        All
                    </h3>
                    <h3
                        onClick={() => setIsFilter("webapp")}
                        className={`${
                            isFilter === "webapp"
                                ? "text-clr-yellow mx-2"
                                : "mx-2"
                        } cursor-pointer`}
                    >
                        Web Apps
                    </h3>
                    <h3
                        onClick={() => setIsFilter("website")}
                        className={`${
                            isFilter === "website"
                                ? "text-clr-yellow mx-2"
                                : "mx-2"
                        } cursor-pointer`}
                    >
                        Web Sites
                    </h3>
                </div>
                <div className="grid grid-cols-12 w-full  gap-8 transition-all duration-1000">
                    {data
                        .filter((data) => data.catagory !== isFilter)
                        .map((data, index) => {
                            return (
                                <motion.div
                                    key={data.id}
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.3,
                                        type: "tween",
                                        opacity: { duration: 0.7 },
                                    }}
                                    className="span_wrap col-span-4 rounded-lg w-96 h-56 overflow-hidden relative flex justify-center items-center before:content-[''] before:absolute before:w-full before:h-full hover:before:bg-clr-yellow before:transition-all before:duration-[600ms]"
                                >
                                    <img
                                        src={data.img}
                                        style={{
                                            aspectRatio: "1/1",
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    />
                                    <span className="span">
                                        {data.wesitename}
                                    </span>
                                </motion.div>
                            )
                        })}
                </div>
            </Section>
        </PortfolioWrap>
    )
}
