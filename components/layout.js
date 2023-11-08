import { useState } from "react"
// components
import NavBar from "./navbar.js"
import { PreloderAnimation } from "../components/animations.js"
import Pointer from "./cursor.js"

export default function Layout({ children }) {
    const [mousePosition, setMousePosition] = useState({})
    return (
        <div
            className="w-screen h-screen overflow-hidden relative"
            onPointerMove={(event) =>
                setMousePosition({ x: event.clientX, y: event.clientY })
            }
        >
            <Pointer mousePosition={mousePosition} />
            <PreloderAnimation />
            <div className="overflow-x-hidden w-screen h-screen">
                <NavBar />
                {children}
            </div>
        </div>
    )
}
