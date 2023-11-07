import NavBar from "./navbar.js"
import { PreloderAnimation } from "../components/animations.js"

export default function Layout({ children }) {
    return (
        <div className="w-screen h-screen overflow-hidden relative">
            <PreloderAnimation />
            <div className="overflow-x-hidden w-screen h-screen">
                <NavBar />
                {children}
            </div>
        </div>
    )
}
