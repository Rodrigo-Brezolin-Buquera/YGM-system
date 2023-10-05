import { lazy } from "react";
import PageLoading from "../../../components/PageLoading"

const ContractPage = lazy(() => import("../../../screens/contractPage"))

export default function Contract() {
  return (
      <PageLoading>
        <ContractPage />
      </PageLoading>
  )
}
