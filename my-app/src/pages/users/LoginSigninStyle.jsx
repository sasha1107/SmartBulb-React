import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginSigninSection = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #efefef;
    text-align: center;
    display: flex;
    flex-direction:column;
    align-items: center;
`
export const InputIdPw = styled.input`
background: #f1f4f7;
display: block;
border: none;
font-size: 16px;
padding: 12px;
`

export const LinkRegister = styled(Link)`
    color: #808080;
    span {
        color: #fa5c58;
        font-weight: 700;
    }
`
export const Forms = styled.form`
    display: flex;
    width: 60%;
    flex-direction: column; 
    margin: 0 auto;
    gap: 20px;
`
// export const MyPageSection = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background: #fff;
//     color: rgb(81, 81, 81);
//     border-radius: 20px;
//     box-shadow: 2px 2px 10px rgb(0 0 0 / 15%);
//     gap: 20px;
//     padding: 20px 50px;
// `

export const BtnMypage = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    width: 45%;
    border: none;
    border: 1px solid #fa5c58;
    cursor: pointer;
    background: #fff;
    color: #fa5c58;
    &:hover{
        background: #fa5c58;
        color: #fff;
        span {
            color: #fff;
        }
    }
    .faIcon {
        position: relative;
        bottom: 2px;
        font-size: 36px;
    }
    span {
        color: #818181;
        font-size: 14px;
        font-weight: 400;
    }
`

export const BtnCont = styled.div`
    display: flex;
    justify-content: space-around;
`