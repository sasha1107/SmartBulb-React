import styled from "styled-components";

import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Calendar from "./Calendar";

const DiarySection = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #efefef;
    text-align: center;
    display: flex;
    flex-direction:column;
    align-items: center;
`
export default function Diary() {
    return (
        <DiarySection>
            <Navbar/>
            <Logo/>
            <Calendar/>
            <Footer/>
        </DiarySection>
    )
}
