import { CircularProgress } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AdminPage = lazy(() => import("../pages/adminPage"))
const CalendarPage = lazy(() => import("../pages/calendarPage"))
const ErrorPage = lazy(() => import("../pages/errorPage"))
const LoginPage = lazy(() => import("../pages/loginPage"))
const UserPage = lazy(() => import("../pages/userPage"))
const ClassPage = lazy(() => import("../pages/classPage"))
const ContractPage = lazy(() => import("../pages/contractPage"))

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
                    <Route exact path="/admin/calendar" element={<CalendarPage />} />
                    <Route exact path="/admin/class/:classId" element={<ClassPage />} />
                    <Route exact path="/admin/contract/:userId" element={<ContractPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );

};

export default Router;
