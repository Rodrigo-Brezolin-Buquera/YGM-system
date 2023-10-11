"use client"
import { lazy } from "react";
import PageLoading from "../../../../components/PageLoading"

const ClassPage = lazy(() => import("../../../../screens/classPage"))

export default function Class({ params }) {
    return (
        <PageLoading>
            <ClassPage id={params.id} />
        </PageLoading>
    )
}
