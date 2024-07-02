import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/home/pages/Home";
import Login from "./modules/auth/pages/Login";
import Signup from "./modules/auth/pages/Signup";
import Dashboard from "./modules/dashboard/pages/Dashboard";
import Root from "./store/Root";

function App() {
    return (
        <div>
            <Root>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Root>
        </div>
    );
}

export default App;
