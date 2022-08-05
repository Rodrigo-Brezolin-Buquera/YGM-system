import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "../pages/loginPage/LoginPage"
import ErrorPage from "../pages/errorPage/ErrorPage"
import UserPage from "../pages/userPage/UserPage"
import AdminPage from '../pages/adminPage/AdminPage';
import CreateContractPage from '../pages/createContractPage/CreateContractPage';
import EditCalendarPage from '../pages/editCalendarPage/EditCalendarPage';
import ViewClassPage from '../pages/viewClassPage/ViewClassPage';
import ViewContractPage from '../pages/viewContractPage/ViewContractPage';
import EditContractPage from '../pages/editContractPage/EditContractPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>

                <Route exact path="/usuário/:userId">
                    <UserPage />
                </Route>

                <Route exact path="/admin">
                    <AdminPage />
                </Route>

                <Route exact path="/admin/adicionar-usuário">
                    <CreateContractPage />
                </Route>

                <Route exact path="/admin/calendário">
                    <EditCalendarPage />
                </Route>

                <Route exact path="/admin/aula/:classId">
                    <ViewClassPage />
                </Route>

                <Route exact path="/admin/usuário/:userId">
                    <ViewContractPage />
                </Route>

                <Route exact path="/admin/usuário/:userId/editar">
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
