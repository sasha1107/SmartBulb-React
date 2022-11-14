import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"


export default function Navbar() {
  const [expand, setExpand] = useState(false);

  function handleClickBar(e){
    expand ? setExpand(false) : setExpand(true)
  }

  return (
    <>
      {expand ?
      <>
      <FaTimes onClick={handleClickBar} className="icon"/>
      <nav>
        <h2>Menu</h2>
        <ul class="nav">
          <li><a href="{% url 'home' %}">HOME</a></li>
          <li><a href="{% url 'login' %}">DIARY</a></li>
          <li><a href="{% url 'login' %}">MYPAGE</a></li>
          <li><a href="{% url 'login' %}">LOGIN</a></li>
        </ul>
      </nav>
      </>
      : <FaBars onClick={handleClickBar} className="icon"/>
      }
    </>
  )
}
