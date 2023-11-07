import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SkillCounters({ end = 100, label = "SKILL" }) {
    const [countUp, setCountup] = useState(0)
    const [startStop, setStartStop] = useState(false)

    const radius = 45
    const Offset = radius * 2 * Math.PI

    useEffect(() => {
        const intervel = setInterval(() => {
            if (startStop) {
                if (countUp === end) {
                    setStartStop(false)
                } else {
                    setCountup(countUp + 1)
                }
            }
        }, [15])
        return () => clearInterval(intervel)
    })

    return (
        <motion.div
            className="w-max my-4"
            whileInView={() => setStartStop(true)}
            viewport={{ once: true }}
        >
            <div className="w-[8rem] h-[8rem] flex justify-center items-center relative">
                <motion.svg
                    fill="none"
                    stroke="var(--color-yellow)"
                    strokeWidth="6"
                    viewBox="0 0 100 100"
                    strokeLinecap="round"
                    strokeDasharray="281"
                    strokeDashoffset={Offset - (countUp / 100) * Offset}
                    xmlns="http://www.w3.org/2000/svg"
                    className="-rotate-90 absolute z-[1]"
                >
                    <motion.circle cx="50" cy="50" r={radius} />
                </motion.svg>
                <motion.svg
                    fill="none"
                    stroke="var(--color-gray)"
                    strokeWidth="6"
                    viewBox="0 0 100 100"
                    strokeLinecap="round"
                    strokeDasharray="281"
                    // strokeDashoffset="0"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-rotate-90 abosolute"
                >
                    <motion.circle cx="50" cy="50" r={radius} />
                </motion.svg>
                <span className="text-white text-2xl font-semibold absolute">
                    {countUp + "%"}
                </span>
            </div>
            <div className="w-full">
                <h2 className="font-medium mt-4 text-white uppercase text-center text-2xl">
                    {label}
                </h2>
            </div>
        </motion.div>
    )
}
