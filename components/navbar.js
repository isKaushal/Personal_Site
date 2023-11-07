import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useMedia } from "react-use"

// componts
import { Home, User, Brefcase, Mail } from "./icons.js"

function ActiveLink({ children, href, className }) {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick}>
            <div className={className}>{children}</div>
        </a>
    )
}

function MobileNavBar({ list, isHover, setIsHover }) {
    return (
        <div className="fixed w-screen left-0 top-auto bottom-0 flex justify-around items-center z-[4] bg-clr-gray">
            {list.map((data, index) => {
                return (
                    <ActiveLink
                        key={index}
                        href={`/isKaushal/${data.pagename}`}
                        className="relative py-4 flex flex-col justify-center items-center "
                    >
                        <motion.div
                            onMouseEnter={() => setIsHover(index)}
                            onMouseLeave={() => setIsHover(false)}
                            className="button w-12 h-12 flex justify-center items-center transition-all duration-300 bg-clr-gray-lite hover:bg-clr-yellow rounded-full text-white text-xl relative cursor-pointer"
                        >
                            {data.icon}
                        </motion.div>
                    </ActiveLink>
                )
            })}
        </div>
    )
}

export default function NavBar() {
    const [isHover, setIsHover] = useState("")
    const isWide = useMedia("(min-width:1024px)", true)

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
        <>
            {isWide ? (
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
                                        className="button w-14 h-14 flex justify-center items-center transition-all duration-300 bg-clr-gray hover:bg-clr-yellow rounded-full text-white text-xl z-[4] relative cursor-pointer"
                                    >
                                        {data.icon}
                                    </motion.div>
                                    <div
                                        className={
                                            isHover === index
                                                ? "flex items-center top-2/4 right-0 pointer-events-none transition-all duration-300 -translate-y-2/4 font-semibold text-white absolute uppercase bg-clr-yellow p-2 px-7 pr-14 h-14 rounded-full text-lg opacity-100"
                                                : "flex items-center top-2/4 right-0 pointer-events-none transition-all duration-300 -translate-y-2/4 font-semibold text-white absolute uppercase bg-clr-yellow p-2 px-7 pr-0 h-14 rounded-full text-lg opacity-0"
                                        }
                                    >
                                        {data.pagename}
                                    </div>
                                </ActiveLink>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <MobileNavBar
                    list={pages}
                    isHover={isHover}
                    setIsHover={setIsHover}
                />
            )}
        </>
    )
}
