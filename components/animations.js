import { motion } from "framer-motion"

export function PortfolioAnimation({ children, index, style, className, id }) {
    return (
        <motion.div
            className={className}
            style={style}
            key={id}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.3 * id,
                duration: 0.3,
                type: "tween",
                opacity: { duration: 0.7 },
            }}
        >
            {children}
        </motion.div>
    )
}

export function PreloderAnimation() {
    return null
}
