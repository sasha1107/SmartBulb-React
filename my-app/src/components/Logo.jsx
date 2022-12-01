import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../components/img/logo.png"

const LogoImg = styled.img`
    width: 70px;
    margin: 20px;
`
export default function Logo() {
    return (
    <Link to="/">
            <h1 className='ir'>Logo</h1>
            <LogoImg src={logo} alt="logo image"/>
    </Link>
    )
}
