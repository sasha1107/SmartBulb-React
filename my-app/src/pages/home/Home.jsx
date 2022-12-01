import React from 'react'
import Footer from '../../components/Footer.jsx'
import Navbar from '../../components/Navbar.jsx'
import styled, { keyframes } from "styled-components";
import logo from './img/loading.png'
import { useNavigate } from 'react-router-dom';

const LogoAni = keyframes`
    100% { 
        background-position: -1200px 0;
    }
`
const LogoImg = styled.div`
    width: 200px;
    height: 200px; 
    background: url(${logo}) no-repeat 0 0 / auto 200px;
    animation: ${LogoAni} 3.5s infinite steps(6);
    display: block;
    margin: 0px auto;
`

const BtnLogin = styled.button`
    padding: 10px 20px;
    background: #fa5c58;
    border: 2px solid #fa5c58;
    color: #fff;
    cursor: pointer;
    &:hover {
        padding: 10px 20px;
        background: none;
        color: #fa5c58;
        
    }
`
const HomeSection = styled.section`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const Title = styled.h1`
    font-size: 21px;
    font-weight: 400;
`

export default function Home() {
    const user = {
        login: false,
        // login: true,
        id: 'soohyun',
        email: 'sasha1107@naver.com',
        img : 'https://i.pinimg.com/564x/39/e6/60/39e66091250c901c35c090355250a724.jpg'
    }

    const navigate = useNavigate();
 
    const navigateToLogin = () => {
        navigate("/login");
    };
    
    return (
    <HomeSection>
        <Navbar/>
        <LogoImg/>
        <Title>마음반짝이</Title>
        {
            user.login ?
            <p>{user.id}님 안녕하세요 :)</p> : 
            <BtnLogin onClick={navigateToLogin}>LOGIN</BtnLogin>
        }
        <Footer/>
    </HomeSection>
    )
}
