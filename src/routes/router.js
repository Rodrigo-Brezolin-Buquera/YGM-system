import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "../pages/loginPage/LoginPage"
import ErrorPage from "../pages/errorPage/ErrorPage"
import UserPage from "../pages/userPage/UserPage"
import AdminPage from '../pages/adminPage/AdminPage';
import CreateContractPage from '../pages/createContractPage/CreateContractPage';
import CalendarPage from '../pages/calendarPage/CalendarPage';
import ViewClassPage from '../pages/viewClassPage/ViewClassPage';
import ViewContractPage from '../pages/viewContractPage/ViewContractPage';
import EditContractPage from '../pages/contractPage/ContractPage';
import AdminLoginPage from '../pages/adminLoginPage/LoginPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>

                <Route exact path="/user/:userId">
                    <UserPage />
                </Route>

                <Route exact path="/admin/login">
                    <AdminLoginPage />
                </Route>

                <Route exact path="/admin/main">
                    <AdminPage />
                </Route>

                <Route exact path="/admin/addUser">
                    <CreateContractPage />
                </Route>

                <Route exact path="/admin/calendar">
                    <CalendarPage />
                </Route>

                <Route exact path="/admin/class/:classId">
                    <ViewClassPage />
                </Route>

                <Route exact path="/admin/user/:userId">
                    <ViewContractPage />
                </Route>

                <Route exact path="/admin/user/:userId/edit">
                    <EditContractPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );

};

export default Router;
