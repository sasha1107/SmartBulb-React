import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  ExpandMenu,
  MenuTitle,
  MenuList,
  LinkButton
} from "./navbar.style";

const iconStyle = {
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "30px",
  right: "30px",
  zIndex: "10",
  cursor: "pointer",
}

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
            <LinkButton to="/">HOME</LinkButton>
            <LinkButton to="/diary">DIARY</LinkButton>
            <LinkButton to="/mypage">MYPAGE</LinkButton>
            <LinkButton to="/login">LOGIN</LinkButton>
          </MenuList>
        </ExpandMenu>
      </>
      : <FaBars onClick={handleClickBar} style={iconStyle}/>
      }
    </>
  )
}

