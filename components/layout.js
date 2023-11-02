import NavBar from "./navbar.js"

export default function Layout({ children }) {
    return (
        <div className="overflow-x-hidden w-screen h-screen">
            <NavBar />
            {children}
        </div>
    )
}
