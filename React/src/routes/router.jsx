import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.pages";
import ChatPage from "../pages/chat/Chat.pages";
import NotFound from "../pages/notfound/NotFound";
import PrivatePage from "../pages/guard/Private.page";


const router = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<PrivatePage component={ChatPage} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)



export default router