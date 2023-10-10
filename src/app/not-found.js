"use client"
import { lazy } from "react";
import PageLoading from "../components/PageLoading"

const ErrorPage = lazy(() => import("../screens/errorPage"))

export default function NotFound () {
    return (
        <PageLoading>
            <ErrorPage />
        </PageLoading>
    )
}
