import styled from "styled-components";
import Navbar from '../../Navbar';
import Logo from '../../Logo';
import UserForm from '../../UserForm';
import Footer from '../../Footer';

import {
    LoginSigninSection,
    InputIdPw,
} from './LoginSigninStyle'


export default function SignIn() {
    return (
        <LoginSigninSection>
            <Navbar/>
            <Logo/>
            <UserForm
                title="SIGNIN"
                subtit="회원가입"
                button="SIGNIN">
                    <InputIdPw type="text" placeholder="id"></InputIdPw>
                    <InputIdPw type="password" placeholder="password"></InputIdPw>
                    <InputIdPw type="password" placeholder="password"></InputIdPw>
            </UserForm>
            <Footer/>
        </LoginSigninSection>
    )
}
