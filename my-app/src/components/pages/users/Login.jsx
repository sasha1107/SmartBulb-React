import styled from "styled-components";
import { Link } from "react-router-dom";

import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Logo from '../../Logo';
import UserForm from '../../UserForm';
import SignIn from "./SignIn";


const LoginSection = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #efefef;
    text-align: center;
    display: flex;
    flex-direction:column;
    align-items: center;
`

export default function Login() {
    return (
    <LoginSection>
        <Navbar/>
        <Logo/>
        <UserForm
            title="LOGIN"
            subtit="로그인"
            button="LOGIN">
            <input type="text" placeholder="id"></input>
            <input type="password" placeholder="password"></input>
            <Link to="/SmartBulb-React/signin">회원가입</Link>
        </UserForm>
        <Footer/>
    </LoginSection>
    )
}
