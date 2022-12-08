import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";

const NewDiarySection = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #efefef;
    text-align: center;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

export default function NewDiary() {
    const location = useLocation();
    const state = location.state;
    const [year, setYear] = useState(state[0])
    const [month, setMonth] = useState(state[1])
    const [date, setDate] = useState(state[2])

    return (
        <NewDiarySection>
        <Navbar/>
        <Logo/>
        <div>{year}년 {month}월 {date}일</div>
        <Footer/>
        </NewDiarySection>
    )
}
