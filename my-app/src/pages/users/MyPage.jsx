import React from 'react'
import Navbar from '../../components/Navbar'
import Logo from '../../components/Logo'
import Footer from '../../components/Footer'
import UserForm from '../../components/UserForm'
// import Login from './Login'
import { FaRegLightbulb, FaChartPie } from "react-icons/fa";

import { 
    LoginSigninSection,
    BtnMypage,
    BtnCont,
} from "./LoginSigninStyle"

export default function MyPage() {
    return (
        // {login ? <></>: <Login/>}
        <LoginSigninSection>
            <Navbar/>
            <Logo/>
            <UserForm
            title="MYPAGE"
            subtit="마이페이지">
                <BtnCont>
                    <BtnMypage>
                        <FaChartPie className='faIcon'/>감정 통계 보기
                        <span>
                        그 동안의 감정 통계를<br/>살펴볼 수 있습니다.
                        </span>
                    </BtnMypage>
                    <BtnMypage>
                        <FaRegLightbulb className='faIcon'/>전구 정보 등록
                        <span>
                        전구 정보를 등록할 수 있습니다.
                        </span>
                    </BtnMypage>
                </BtnCont>
            </UserForm>
            <Footer />
        </LoginSigninSection>
    )
}
