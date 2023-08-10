import { lazy } from "react";
import { findAllItems } from "../../../api";
import { plansCol } from "../../../api/config";
import PageLoading from "../../../components/PageLoading"

const ContractPage = lazy(() => import("../../../screens/contractPage"))

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'id'
        }
      }
    ],
    fallback: true
  }
}

export async function getStaticProps() {
  const plans = await findAllItems(plansCol)
  return {
    props: {
      plansOptions: plans
  }
}
}

export default function Contract({plansOptions}) {
  return (
      <PageLoading>
        <ContractPage plansOptions={plansOptions} />
      </PageLoading>
  )
}
