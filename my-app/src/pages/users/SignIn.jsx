import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import UserForm from '../../components/UserForm';
import Footer from '../../components/Footer';

import {
    LoginSigninSection,
    InputIdPw,
    Forms
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
                <Forms action="">
                    <InputIdPw type="text" placeholder="id" id="id" required></InputIdPw>
                    <InputIdPw type="password" placeholder="password" className="pw" id='pw' required></InputIdPw>
                    <InputIdPw type="password" placeholder="password" className="pw check" id='pwCheck' required></InputIdPw>
                </Forms>
            </UserForm>
            <Footer/>
        </LoginSigninSection>
    )
}
