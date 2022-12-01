import { useState, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import UserForm from '../../components/UserForm';
// import SignIn from "./SignIn";
import {
    LoginSigninSection,
    InputIdPw,
    LinkRegister,
    Forms
} from './LoginSigninStyle'

import {
    BtnSubmit
} from '../../components/userForm.style'

export default function Login() {
    const idInput = useRef(null)
    const [idVal, setIdVal] = useState('')

    const onSubmitHandler = (e) => {
        // handle yow submition
        console.log(e)
    }
    
    const onIdChange = (e) => {
        if (!idInput.current) return;

        setIdVal(e.currentTarget.value);
        const {validity} = idInput.current;
        // console.log(validity);

        if (validity.patternMismatch) {
            idInput.current.setCustomValidity('형식에 맞지 않은 아이디입니다.')
        }
        else if (validity.valueMissing){
            idInput.current.setCustomValidity('아이디를 입력해주세요.')
        }
        else {
            idInput.current.setCustomValidity('')
        }
    }

    return (
    <LoginSigninSection>
        <Navbar/>
        <Logo/>
        <UserForm
            title="LOGIN"
            subtit="로그인"
            button="LOGIN">
                <Forms action="">
                    <label htmlFor="id">
                        아이디
                    </label>
                    <InputIdPw
                        type="text"
                        ref={idInput}
                        id="id"
                        value={idVal}
                        placeholder="id"
                        pattern="[0-9a-zA-z]*"
                        required
                        onChange={onIdChange}
                    >
                    </InputIdPw>
                    <label htmlFor="pw">
                        비밀번호
                    </label>
                    <InputIdPw
                        type="password"
                        placeholder="password"
                        id="pw"
                        required>
                    </InputIdPw>
            <LinkRegister to="/signin">
                아직 회원이 아니십니까?
                <span> 회원가입하기</span>
            </LinkRegister>
            <BtnSubmit onSubmit={onSubmitHandler}>로그인</BtnSubmit>
            </Forms>
        </UserForm>
        <Footer/>
    </LoginSigninSection>
    )
}
