import { lazy } from "react";
import { findAllItems } from "../../api";
import { businessCol, plansCol, stylesCol, teachersCol } from "../../api/config";
import PageLoading from "../../components/PageLoading"

const AdminPage = lazy(() => import("../../screens/adminPage"))

export async function getStaticProps() {
    const [businessInfo] = await findAllItems(businessCol)
    const yogaStyles = await findAllItems(stylesCol)
    const teachers = await findAllItems(teachersCol)
    const plans = await findAllItems(plansCol)

    const selectOptions ={
      stylesOptions: yogaStyles,
      teachersOptions: teachers ,
      plansOptions: plans
    }

    return {
      props: {
        classLimit: businessInfo.maxCapacity,
        selectOptions:selectOptions
      }
    }
  }

export default function Home({classLimit, selectOptions}) {
  return (
      <PageLoading>
        <AdminPage classLimit={classLimit} selectOptions={selectOptions} />
      </PageLoading>
  )
}
