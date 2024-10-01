import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.pages";
import ChatPage from "../pages/chat/Chat.pages";
import Cookies from 'js-cookie';
import NavigateToLogin from "../pages/navigateToLogin/NavigateToLogin";
import NotFound from "../pages/notfound/NotFound";
import PrivatePage from "../pages/guard/Private.page";

const sessionID = Cookies.get('sessionID');

const unAuthedRoutes = (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<NavigateToLogin />} />
    </Routes>
    </BrowserRouter>
);

const authedRoutes = (
    <BrowserRouter>
    <Routes>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
);

const router = (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ChatPage />} />
    </Routes>
  </BrowserRouter>
)



export default router