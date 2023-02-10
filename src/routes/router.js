import { CircularProgress } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AdminPage = lazy(() => import("../pages/adminPage"))
// const CalendarPage = lazy(() => import("../pages/calendarPage"))
// const EditContractPage = lazy(() => import("../pages/editContractPage"))
const ErrorPage = lazy(() => import("../pages/errorPage"))
const LoginPage = lazy(() => import("../pages/loginPage"))
const UserPage = lazy(() => import("../pages/userPage"))
// const ViewClassPage = lazy(() => import("../pages/viewClassPage"))
// const ViewContractPage = lazy(() => import("../pages/viewContractPage"))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <CircularProgress alignSelf={"center"} size='120px' isIndeterminate color="gold" />
                }>
                <Routes>

                    <Route index element={<LoginPage />} />
                    <Route path="/user/:userId" element={<UserPage />} /> 
                    <Route path="/admin" element={<AdminPage />} />
                    {/* <Route exact path="/admin/calendar" element={<CalendarPage />} />
                    <Route exact path="/admin/class/:classId" element={<ViewClassPage />} />
                    <Route exact path="/admin/user/:userId" element={<ViewContractPage />} />
                    <Route exact path="/admin/user/:userId/edit" element={<EditContractPage />} /> */}


                    <Route path='*' element={<ErrorPage />} />


                </Routes>
            </Suspense>
        </BrowserRouter>
    );

};

export default Router;
