import Layout from "@/components/layout"
import NotFound from "../components/notfound.js"
import { PageEnterAnimation } from "@/components/animations.js"

export default function Profile({}) {
    return (
        <Layout>
            <PageEnterAnimation>
                <NotFound />
            </PageEnterAnimation>
        </Layout>
    )
}
