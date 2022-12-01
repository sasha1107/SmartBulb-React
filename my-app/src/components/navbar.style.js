import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const ExpandAni = keyframes`
    0% {
        transform: translateX(300px);
    }
    100% {
        transform: translateX(0px);
    }
`
export const ExpandMenu = styled.nav`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    height: 100vh;
    width: 300px;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 150px 30px;
    gap: 50px;
    box-sizing: border-box;
    animation: ${ExpandAni} .5s;
`
export const MenuTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
`
export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
`

export const LinkButton = styled(Link)`
    font-weight: 400;
    color: rgb(195, 194, 194);
    padding: 7px 0;
    &:hover{
        background-color: rgba(255, 255, 255, 0.8) ;
        color: rgb(81, 81, 81);
        transform: scale(1.1);
        font-weight: 600;
    }
`;