"use client"
import { lazy } from "react";
import PageLoading from "../../../../components/PageLoading"

const ContractPage = lazy(() => import("../../../../screens/contractPage"))

export default function Contract({ params }) {
    return (
        <PageLoading>
            <ContractPage id={params.id} />
        </PageLoading>
    )
}
