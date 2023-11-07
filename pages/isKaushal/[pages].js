import { useRouter } from "next/router"

// compoments
import Home from "@/components/home.js"
import About from "@/components/about.js"
import Portfolio from "@/components/portfolio.js"
import GetInTouch from "@/components/getintouch.js"
import NotFound from "@/components/notfound.js"
import Layout from "@/components/layout.js"

// animations
import { PageEnterAnimation } from "../../components/animations.js"

function PageSwitcher() {
    const router = useRouter()
    if (router.query.pages === "home") {
        return <Home />
    } else if (router.query.pages === "about") {
        return <About />
    } else if (router.query.pages === "portfolio") {
        return <Portfolio />
    } else if (router.query.pages === "contact") {
        return <GetInTouch />
    } else {
        return <NotFound />
    }
}

export default function AllPages() {
    return (
        <Layout>
            <PageEnterAnimation>
                <PageSwitcher />
            </PageEnterAnimation>
        </Layout>
    )
}
