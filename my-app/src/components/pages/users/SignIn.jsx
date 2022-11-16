import styled from "styled-components";
import Navbar from '../../Navbar';
import Logo from '../../Logo';
import UserForm from '../../UserForm';
import Footer from '../../Footer';

const SigninSection = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #efefef;
    text-align: center;
    display: flex;
    flex-direction:column;
    /* justify-content: ; */
    align-items: center;
`

export default function SignIn() {
    return (
        <SigninSection>
            <Navbar/>
            <Logo/>
            <UserForm
                title="SIGNIN"
                subtit="회원가입"
                button="SIGNIN">
                    <input type="text" placeholder="id"></input>
                    <input type="password" placeholder="password"></input>
                    <input type="password" placeholder="password"></input>
            </UserForm>
            <Footer/>
        </SigninSection>
    )
}
