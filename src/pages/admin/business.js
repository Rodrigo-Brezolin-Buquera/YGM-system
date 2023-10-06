import { lazy } from "react";
import PageLoading from "../../components/PageLoading"

const BusinessPage = lazy(() => import("../../screens/businessPage"))

export default function Home() {
    return (
        <PageLoading>
            <BusinessPage />
        </PageLoading>
    )
}
