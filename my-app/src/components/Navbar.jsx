import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const iconStyle = {
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "30px",
  right: "30px",
  zIndex: "10",
  cursor: "pointer",
}

const ExpandAni = keyframes`
  0% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0px);
  }
`
const ExpandMenu = styled.nav`
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
const MenuTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
`

const LinkButton = styled(Link)`
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

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  function handleClickBar(e){
    expand ? setExpand(false) : setExpand(true)
  }

  return (
    <>
      {expand ?
      <>
        <IconContext.Provider value={{ color: "#fafafad6"}}>
          <FaTimes onClick={handleClickBar} style={iconStyle}/>
        </IconContext.Provider>
        <ExpandMenu>
          <MenuTitle>MENU</MenuTitle>
          <MenuList>
            <LinkButton to="/SmartBulb-React/">HOME</LinkButton>
            <LinkButton to="/SmartBulb-React/diary">DIARY</LinkButton>
            <LinkButton to="/SmartBulb-React/">MYPAGE</LinkButton>
            <LinkButton to="/SmartBulb-React/login">LOGIN</LinkButton>
          </MenuList>
        </ExpandMenu>
      </>
      : <FaBars onClick={handleClickBar} style={iconStyle}/>
      }
    </>
  )
}

