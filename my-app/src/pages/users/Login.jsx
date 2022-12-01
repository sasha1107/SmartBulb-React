import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import UserForm from '../../components/UserForm';
// import SignIn from "./SignIn";
import {
    LoginSigninSection,
    InputIdPw,
    LinkRegister,
} from './LoginSigninStyle'


export default function Login() {

    const checkValid = () =>{
        console.log()
    }
    return (
    <LoginSigninSection>
        <Navbar/>
        <Logo/>
        <UserForm
            title="LOGIN"
            subtit="로그인"
            button="LOGIN">
            <form action="">
                <InputIdPw type="text" placeholder="id"></InputIdPw>
                <InputIdPw type="password" placeholder="password"></InputIdPw>
            </form>
            <LinkRegister to="/signin">
                아직 회원이 아니십니까?
                <span> 회원가입하기</span>
            </LinkRegister>
        </UserForm>
        <Footer/>
    </LoginSigninSection>
    )
}
