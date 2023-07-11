import { lazy } from "react";
import PageLoading from "../../components/PageLoading"

const AdminPage = lazy(() => import("../../screens/adminPage"))

export default function Home() {
  return (
      <PageLoading>
        <AdminPage />
      </PageLoading>
  )
}
