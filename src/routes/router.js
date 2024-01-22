import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CircularProgress } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const LoginPage = lazy(() => import("../pages/loginPage"))
const ErrorPage = lazy(() => import("../pages/errorPage"))
const UserPage = lazy(() => import("../pages/userPage"))
const AdminPage = lazy(() => import("../pages/adminPage"))
const BusinessPage = lazy(() => import("../pages/businessPage"))
const CalendarPage = lazy(() => import("../pages/calendarPage"))
const ClassPage = lazy(() => import("../pages/classPage"))
const ContractPage = lazy(() => import("../pages/contractPage"))

export const Router = () => {
    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <CircularProgress alignSelf={"center"} marginTop={"2em"} size='120px' isIndeterminate color="brand.200" />
                }>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/user/:id" element={<UserPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/business" element={<BusinessPage />} />
                    <Route path="/admin/calendar" element={<CalendarPage />} />
                    <Route path="/admin/class/:id" element={<ClassPage />} />
                    <Route path="/admin/contract/:id" element={<ContractPage />} /> 
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router