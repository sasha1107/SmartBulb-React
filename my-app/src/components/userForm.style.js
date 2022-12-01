import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    color: rgb(81, 81, 81);
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgb(0 0 0 / 15%);
    padding: 30px 50px 30px 50px;
`
export const CardTitle = styled.h2`
    font-size: 30px;
`
export const SubTitle = styled.p`
    font-size: 16px;
`
export const BtnSubmit = styled.button`
    width: 60%;
    margin: 0 auto;
    background: #fa5c58;
    border: 2px solid #fa5c58;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #fa5c58;
    }
    font-size: 16px;
    padding: 12px;
`
export const HrLine = styled.hr`
    width: 20%;
    border-width: 1px;
`