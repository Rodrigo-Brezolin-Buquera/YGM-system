import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "../pages/loginPage/LoginPage"
import ErrorPage from "../pages/errorPage/ErrorPage"
import UserPage from "../pages/userPage/UserPage"
import EditProfilePage from "../pages/editProfilePage/EditProfilePage"
import AdminPage from '../pages/adminPage/AdminPage';
import CreateUserPage from '../pages/createUserPage/CreateUserPage';
import EditCalendarPage from '../pages/editCalendarPage/EditCalendarPage';
import ViewClassPage from '../pages/viewClassPage/ViewClassPage';
import ViewUserPage from '../pages/viewUserPage/ViewUserPage';
import EditUserPage from '../pages/editUserPage/EditUserPage';

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

                <Route exact path="/usuário/:userId/editar">
                    <EditProfilePage />
                </Route>

                <Route exact path="/admin">
                    <AdminPage />
                </Route>

                <Route exact path="/admin/adicionar-usuário">
                    <CreateUserPage />
                </Route>

                <Route exact path="/admin/calendário">
                    <EditCalendarPage />
                </Route>

                <Route exact path="/admin/aula/:classId">
                    <ViewClassPage />
                </Route>

                <Route exact path="/admin/usuário/:userId">
                    <ViewUserPage />
                </Route>

                <Route exact path="/admin/usuário/:userId/editar">
                    <EditUserPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );

};

export default Router;
