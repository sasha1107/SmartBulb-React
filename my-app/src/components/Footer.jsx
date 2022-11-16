import React from 'react'
import styled  from "styled-components";

const FooterSection = styled.section`
    width: 100vw;
    padding: 14px 0px;
    position: absolute;
    bottom: 0%;
    background: #333;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
`
const CopyRight = styled.small`
    font-weight: 400;
    display: block;
    font-size: 10px;
`
const Team = styled.span`
    color: #fa5c58;
`
export default function Footer() {
    return (
        <FooterSection>
            <h2 className='ir'>footer</h2>
            HUFS CD
            <Team> Victory Code</Team>
            <CopyRight>Refactored by Soohyun Jung</CopyRight>
        </FooterSection>
    )
}