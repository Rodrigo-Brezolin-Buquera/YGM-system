import { lazy } from "react";
import PageLoading from "../../../components/PageLoading"

const ClassPage = lazy(() => import("../../../screens/classPage"))

export default function Class() {
  return (
      <PageLoading>
        <ClassPage />
      </PageLoading>
  )
}
