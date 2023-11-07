import { motion } from "framer-motion"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
/**
 *
 // page preloder
 *
 */

const PagePreloder = styled.div`
    animation: preload 1s cubic-bezier(0.82, 0.01, 0.2, 1);
    @keyframes preload {
        0% {
            top: 0;
        }
        100% {
            top: 100%;
            display: none !important;
        }
    }
`

export function PreloderAnimation() {
    const router = useRouter()

    return (
        <PagePreloder
            key={router.query.pages}
            className="w-screen h-screen bg-clr-gray transition duration-1000 ease-[cubic-bezier(0.82, 0.01, 0.2, 1)] absolute z-[5] top-full"
        ></PagePreloder>
    )
}

/**
 *
// Next Animatated Page Enterence
 *
 */
const PageAnimation = styled.div`
    animation: animate 1.2s cubic-bezier(0, 0, 0.3, 0.9);
    /* animation: animate 1.2s cubic-bezier(0.82, 0.01, 0.2, 1); */

    @keyframes animate {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export function PageEnterAnimation({ children }) {
    const router = useRouter()

    return <PageAnimation key={router.query.pages}>{children}</PageAnimation>
}
