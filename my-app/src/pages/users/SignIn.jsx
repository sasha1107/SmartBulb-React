import { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import UserForm from '../../components/UserForm';
import Footer from '../../components/Footer';
import {
    LoginSigninSection,
    InputIdPw,
    Forms,
    InpCont,
    ValidIcon,
    AlertMsg
} from './LoginSigninStyle'

import {
    BtnSubmit
} from '../../components/userForm.style'
import checkIcon from '../../components/img/check-circle.svg'
import XIcon from '../../components/img/x-circle.svg'
import { useEffect } from 'react';
export default function SignIn() {
    const idInput = useRef(null)
    const [idVal, setIdVal] = useState('')
    const pwInput = useRef(null)
    const [pwVal, setPwVal] = useState('')
    const pwCheckInput = useRef(null)
    // const [pwCheckVal, setPwCheckVal] = useState('')
    const [valid1, SetValid1] = useState(false)
    const [valid2, SetValid2] = useState(false)
    const [valid3, SetValid3] = useState(false)
    
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
            SetValid1(false)
        }
        else if (validity.valueMissing){
            idInput.current.setCustomValidity('아이디를 입력해주세요.')
            SetValid1(false)
        }
        else {
            idInput.current.setCustomValidity('')
            SetValid1(true)
        }
    }
    const onPwChange = (e) => {
        if (!pwInput.current) return;
        
        setPwVal(e.currentTarget.value);
        const {validity} = pwInput.current;
        
        if (validity.patternMismatch) {
            pwInput.current.setCustomValidity('형식에 맞지 않은 비밀번호입니다.')
            SetValid2(false)
        }
        else if (validity.valueMissing){
            pwInput.current.setCustomValidity('비밀번호를 입력해주세요.')
            SetValid2(false)
        }
        else {
            pwInput.current.setCustomValidity('')
            SetValid2(true)
        }
    }

    const onPwCheckChange = (e) => {
        if (!pwCheckInput.current) return;
        // setPwCheckVal(e.currentTarget.value);
        const {validity} = pwCheckInput.current;
        if (validity.patternMismatch) {
            pwCheckInput.current.setCustomValidity('형식에 맞지 않은 비밀번호입니다.')
            SetValid3(false)
        }
        else if (validity.valueMissing){
            pwCheckInput.current.setCustomValidity('비밀번호를 입력해주세요.')
            SetValid3(false)
        }
        else if (e.currentTarget.value !== document.querySelector('#pw').value){
            pwCheckInput.current.setCustomValidity('비밀번호가 일치하지 않습니다.')
            SetValid3(false)
        }
        else {
            SetValid3(true)
            pwCheckInput.current.setCustomValidity('')
        }
    }
    useEffect(() =>{
        
    }, [valid1, valid2, valid3])
    return (
        <LoginSigninSection>
            <Navbar/>
            <Logo/>
            <UserForm
                title="SIGNIN"
                subtit="회원가입"
                button="SIGNIN">
                <Forms action="">
                    <InpCont>
                        <label htmlFor="id">
                            아이디
                        </label>
                        <InputIdPw
                            type="text"
                            ref={idInput}
                            id="id"
                            value={idVal}
                            placeholder="id"
                            pattern="[0-9a-zA-z]{4,}"
                            required
                            onChange={onIdChange}
                        >
                        </InputIdPw>
                        {valid1 ? <ValidIcon src={checkIcon}/> : <ValidIcon src={XIcon}/>}
                        {valid1 ? <></> : <AlertMsg>4자 이상 영문+숫자</AlertMsg>}
                    </InpCont>
                    <InpCont>
                        <label htmlFor="pw">
                            비밀번호
                        </label>
                        <InputIdPw
                            type="password"
                            ref={pwInput}
                            placeholder="password"
                            pattern="[0-9a-zA-z]{6,}"
                            id="pw"
                            onChange={onPwChange}
                            required>
                        </InputIdPw>
                        {valid2 ? <ValidIcon src={checkIcon}/> : <ValidIcon src={XIcon}/>}
                        {valid2 ? <></> : <AlertMsg>6자 이상 영문+숫자</AlertMsg>}
                    </InpCont>
                    <InpCont>
                        <label htmlFor="pwCheck">
                            비밀번호 확인
                        </label>
                        <InputIdPw
                            type="password"
                            ref={pwCheckInput}
                            id="pwCheck"
                            placeholder="password confirm"
                            pattern="[0-9a-zA-z]{6,}"
                            onChange={onPwCheckChange}
                            required>
                        </InputIdPw>
                        {valid3 ? <ValidIcon src={checkIcon}/> : <ValidIcon src={XIcon}/>}
                        {valid3 ? <></> : <AlertMsg>비밀번호가 일치하지 않습니다.</AlertMsg>}
                    </InpCont>
                    {valid1 && valid2 && valid3 ? <BtnSubmit onSubmit={onSubmitHandler}>회원가입</BtnSubmit> : <></>}
                    {/* <BtnSubmit onSubmit={onSubmitHandler}>회원가입</BtnSubmit> */}
                </Forms>
            </UserForm>
            <Footer/>
        </LoginSigninSection>
    )
}
