import { lazy } from "react";
import PageLoading from "../../components/PageLoading"

const UserPage = lazy(() => import("../../screens/userPage"))

export default function User() {
  return (
      <PageLoading>
        <UserPage />
      </PageLoading>
  )
}

