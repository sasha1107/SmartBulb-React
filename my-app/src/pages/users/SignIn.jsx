import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import UserForm from '../../components/UserForm';
import Footer from '../../components/Footer';

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
