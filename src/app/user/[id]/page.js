"use client"
import { lazy } from "react";
import PageLoading from "../../../components/PageLoading"

const UserPage = lazy(() => import("../../../screens/userPage"))

export default function User({ params }) {
    return (
        <PageLoading>
            <UserPage id={params.id} />
        </PageLoading>
    )
}

