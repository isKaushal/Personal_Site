import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

// componts
import { Home, User, Brefcase, Mail } from "./icons.js"

function ActiveLink({ children, href, className }) {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <div className={className}>
            <a href={href} onClick={handleClick}>
                {children}
            </a>
        </div>
    )
}

export default function NavBar() {
    const [isHover, setIsHover] = useState("")

    const pages = [
        {
            pagename: "home",
            icon: <Home />,
        },
        {
            pagename: "about",
            icon: <User />,
        },
        {
            pagename: "portfolio",
            icon: <Brefcase />,
        },
        {
            pagename: "contact",
            icon: <Mail />,
        },
    ]

    return (
        <div className="absolute h-screen mx-5 right-0 flex items-center">
            <div>
                {pages.map((data, index) => {
                    return (
                        <ActiveLink
                            key={index}
                            href={`/isKaushal/${data.pagename}`}
                            className="relative my-6"
                        >
                            <motion.div
                                onMouseEnter={() => setIsHover(index)}
                                onMouseLeave={() => setIsHover(false)}
                                className="button w-11 h-11 flex justify-center items-center bg-clr-yellow rounded-full text-white text-xl z-[4] relative cursor-pointer"
                            >
                                {data.icon}
                            </motion.div>
                            <div
                                className={
                                    isHover === index
                                        ? "button_name top-2/4 right-0 pointer-events-none transition-all -translate-y-2/4 duration-300 font-semibold text-white absolute uppercase bg-clr-yellow p-2 px-7 pr-12 h-11 rounded-full text-lg opacity-100"
                                        : "button_name top-2/4 right-0 pointer-events-none transition-all -translate-y-2/4 duration-300 font-semibold text-white absolute uppercase bg-clr-yellow p-2 px-7 pr-0 h-11 rounded-full text-lg opacity-0"
                                }
                            >
                                {data.pagename}
                            </div>
                        </ActiveLink>
                    )
                })}
            </div>
        </div>
    )
}
