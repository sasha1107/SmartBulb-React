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