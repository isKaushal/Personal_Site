import Button from "@/components/button.js"
import { motion } from "framer-motion"

export default function DemoPage() {
    const y = "100%"
    return (
        <motion.div
            className="w-screen h-screen bg-clr-gray transition duration-1000 ease-[cubic-bezier(0.49, 0, 0.2, 1)] absolute z-[2]"
            initial={{ y: 0 }}
            animate={{ y: y }}
            transition={{ delay: "0.5" }}
        ></motion.div>
    )
}
