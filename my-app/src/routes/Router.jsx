import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import LogIn from "../pages/users/Login";
import SignIn from "../pages/users/SignIn";
import Diary from "../pages/diary/Diary";
import MyPage from "../pages/users/MyPage";

export default function Router() {
    return (
        <BrowserRouter basename="SmartBulb-React">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/diary" element={<Diary />}/>
                <Route path="/mypage" element={<MyPage />}/>
                <Route path="/login" element={<LogIn />}/>
                <Route path="/signin" element={<SignIn />}/>
            </Routes>
        </BrowserRouter>
    )
}