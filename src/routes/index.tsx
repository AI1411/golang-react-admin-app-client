import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../App";
import Users from "../pages/users/users";
import Header from "../components/Header";
import Todos from "../pages/todos/todos";
import UserDetail from "../pages/users/detail";
import TodoDetail from "../pages/todos/detail";
import RegisterTodo from "../pages/todos/register";
import CalendarIndex from "../pages/calendar";
import Register from "../pages/auth/register";

const AppRoutes = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/calendar" element={<CalendarIndex/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="users/:id" element={<UserDetail/>}/>
                <Route path="todos" element={<Todos/>}/>
                <Route path="todos/:id" element={<TodoDetail/>}/>
                <Route path="todos/register" element={<RegisterTodo/>}/>
                <Route path="auth/register" element={<Register/>}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;
