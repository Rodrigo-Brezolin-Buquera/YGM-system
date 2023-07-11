import { lazy } from "react";
// import NextHead from "../components/NextHead";
import PageLoading from "../components/PageLoading"

const ErrorPage = lazy(() => import("../screens/errorPage"))

export default function Page404 () {
  return (
    <>
      {/* <NextHead /> */}
      <PageLoading>
        <ErrorPage />
      </PageLoading>
    </>
  )
}
