import { motion } from "framer-motion"
import { useMedia } from "react-use"

export default function Pointer({ mousePosition }) {
    const isWide = useMedia("(min-width:1024px)", true)
    return (
        <>
            {isWide && (
                <>
                    <motion.div
                        style={{
                            top: mousePosition.y - 20,
                            left: mousePosition.x - 20,
                            transition: "0.4s ease-out",
                        }}
                        className={
                            "lg:block pointer-events-none z-[10] rounded-full absolute bg-clr-yellow w-10 h-10 opacity-40"
                        }
                    ></motion.div>
                    <motion.div
                        className="lg:flex pointer-events-none z-[10] rounded-full absolute w-10 h-10 justify-center items-center"
                        style={{
                            top: mousePosition.y - 20,
                            left: mousePosition.x - 20,
                        }}
                    >
                        <div
                            className={
                                "rounded-full absolute bg-clr-yellow w-2 h-2"
                            }
                        ></div>
                    </motion.div>
                </>
            )}
        </>
    )
}
