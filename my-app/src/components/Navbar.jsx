import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled, { keyframes } from "styled-components";
import "./Navbar.css"
import { Link } from "react-router-dom";

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

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  function handleClickBar(e){
    expand ? setExpand(false) : setExpand(true)
  }

  return (
    <>
      {expand ?
      <>
        <IconContext.Provider value={{ color: "#fafafad6", className: "global-class-name" }}>
          <FaTimes onClick={handleClickBar} className="icon"/>
        </IconContext.Provider>
        <ExpandMenu>
          <MenuTitle>MENU</MenuTitle>
          <MenuList>
            <Link to="/SmartBulb-React/" className='menuLink'>HOME</Link>
            <Link to="/SmartBulb-React/" className='menuLink'>DIARY</Link>
            <Link to="/SmartBulb-React/" className='menuLink'>MYPAGE</Link>
            <Link to="/SmartBulb-React/login" className='menuLink'>LOGIN</Link>
          </MenuList>
        </ExpandMenu>
      </>
      : <FaBars onClick={handleClickBar} className="icon"/>
      }
    </>
  )
}

