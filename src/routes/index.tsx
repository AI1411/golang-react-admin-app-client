import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../App";
import Users from "../pages/users/users";
import Header from "../components/Header";
import Todos from "../pages/todos/todos";

const AppRoutes = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="todos" element={<Todos/>}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;
