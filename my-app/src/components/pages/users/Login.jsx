import { Link } from "react-router-dom";

import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Logo from '../../Logo';
import UserForm from '../../UserForm';
import SignIn from "./SignIn";
import {
    LoginSigninSection,
    InputIdPw,
    LinkRegister,
} from './LoginSigninStyle'


export default function Login() {
    return (
    <LoginSigninSection>
        <Navbar/>
        <Logo/>
        <UserForm
            title="LOGIN"
            subtit="로그인"
            button="LOGIN">
            <InputIdPw type="text" placeholder="id"></InputIdPw>
            <InputIdPw type="password" placeholder="password"></InputIdPw>
            <LinkRegister to="/SmartBulb-React/signin">
                아직 회원이 아니십니까?
                <span> 회원가입하기</span>
            </LinkRegister>
        </UserForm>
        <Footer/>
    </LoginSigninSection>
    )
}
