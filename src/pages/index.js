import { lazy } from "react";
import PageLoading from "../components/PageLoading"

const LoginPage = lazy(() => import("../screens/loginPage"))

export default function Home() {
  return (
      <PageLoading>
        <LoginPage />
      </PageLoading>
  )
}


