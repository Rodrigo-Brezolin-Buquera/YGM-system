import { lazy } from "react";
import PageLoading from "../components/PageLoading"

const ErrorPage = lazy(() => import("../screens/errorPage"))

export default function Page404 () {
  return (
      <PageLoading>
        <ErrorPage />
      </PageLoading>
  )
}
