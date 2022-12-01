import { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import UserForm from '../../components/UserForm';
import Footer from '../../components/Footer';
import './a.css'
import {
    LoginSigninSection,
    InputIdPw,
    Forms
} from './LoginSigninStyle'

import {
    BtnSubmit
} from '../../components/userForm.style'


export default function SignIn() {
    const idInput = useRef(null)
    const [idVal, setIdVal] = useState('')
    const pwCheckInput = useRef(null)
    // const [pwCheckVal, setPwCheckVal] = useState('')
    const [aa, setAA] = useState(false)
    
    const onSubmitHandler = (e) => {
        // handle yow submition
        console.log(e)
    }
    const onIdChange = (e) => {
        if (!idInput.current) return;
        
        setIdVal(e.currentTarget.value);
        const {validity} = idInput.current;
        
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

    const onPwCheckChange = (e) => {
        if (!pwCheckInput.current) return;
        // setPwCheckVal(e.currentTarget.value);
        const {validity} = pwCheckInput.current;
        if (validity.patternMismatch) {
            pwCheckInput.current.setCustomValidity('형식에 맞지 않은 비밀번호입니다.')
        }
        else if (validity.valueMissing){
            pwCheckInput.current.setCustomValidity('비밀번호를 입력해주세요.')
        }
        else if (e.currentTarget.value !== document.querySelector('#pw').value){
            pwCheckInput.current.setCustomValidity('비밀번호가 일치하지 않습니다.')
        }
        else {
            setAA(true)
            pwCheckInput.current.setCustomValidity('')
        }
    }
    return (
        <LoginSigninSection>
            <Navbar/>
            <Logo/>
            <UserForm
                title="SIGNIN"
                subtit="회원가입"
                button="SIGNIN">
                <Forms action="">
                    <label htmlFor="id" className={aa ? 'active' : 'none'}>
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
                        pattern="[0-9a-zA-z]*"
                        id="pw"
                        required>
                    </InputIdPw>
                    <label htmlFor="pwCheck">
                        비밀번호 확인
                    </label>
                    <InputIdPw
                        type="password"
                        ref={pwCheckInput}
                        id="pwCheck"
                        placeholder="password confirm"
                        pattern="[0-9a-zA-z]*"
                        onChange={onPwCheckChange}
                        required>
                    </InputIdPw>
                    <BtnSubmit onSubmit={onSubmitHandler}>회원가입</BtnSubmit>
                </Forms>
            </UserForm>
            <Footer/>
        </LoginSigninSection>
    )
}
