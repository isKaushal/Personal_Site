import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SkillCounters({ end = 100 }) {
    const [countUp, setCountup] = useState(0)
    const [startStop, setStartStop] = useState(true)
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
    }, [startStop === false ? null : countUp])

    const radius = 45
    const Offset = radius * 2 * Math.PI
    console.log(Offset - (countUp / 100) * Offset)

    return (
        <motion.div
            className="my-8"
            whileInView={() => setStartStop(true)}
            viewport={{ once: true }}
        >
            <div className="w-[8rem] h-[8rem] flex justify-center items-center relative">
                <motion.svg
                    fill="none"
                    stroke="#ffb400"
                    strokeWidth="6"
                    viewBox="0 0 100 100"
                    strokeLinecap="round"
                    strokeDasharray="281"
                    strokeDashoffset={Offset - (countUp / 100) * Offset}
                    xmlns="http://www.w3.org/2000/svg"
                    className="-rotate-90"
                >
                    <motion.circle cx="50" cy="50" r={radius} />
                </motion.svg>
                <span className="text-white text-2xl font-semibold absolute">
                    {countUp + '%'}
                </span>
            </div>
        </motion.div>
    )
}
