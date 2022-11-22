import styled from "styled-components";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './calendar.css'

const CalendarSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 20px 50px;
    background: #fff;
    color: rgb(81, 81, 81);
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgb(0 0 0 / 15%);
    gap: 20px;
`

const Navigator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: rgb(81, 81, 81);
    gap: 20px;
`

const BtnMonth = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgb(81, 81, 81);
    color: inherit;
    cursor: pointer;
    &:active {
        background:rgba(81, 81, 81, 0.3);
    }
`

export default function Calendar() {
    return (
    <CalendarSection>
        <Navigator>
            <BtnMonth><FaChevronLeft/></BtnMonth>
            <time dateTime="2022-11">
                <span className="year">2022</span>년
                <span className="month">11</span>월
            </time>
            <BtnMonth><FaChevronRight/></BtnMonth>
        </Navigator>
        <table>
            <thead>
                <tr>
                    <th className="day">일</th>
                    <th className="day">월</th>
                    <th className="day">화</th>
                    <th className="day">수</th>
                    <th className="day">목</th>
                    <th className="day">금</th>
                    <th className="day">토</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="date">6</td>
                    <td className="date">6</td>
                    <td className="date">6</td>
                    <td className="date">6</td>
                    <td className="date">6</td>
                    <td className="date">6</td>
                    <td className="date">6</td>
                </tr>
                <tr>
                    <td className="date">5</td>
                    <td className="date">5</td>
                    <td className="date">5</td>
                    <td className="date">5</td>
                    <td className="date">5</td>
                    <td className="date">5</td>
                    <td className="date">5</td>
                </tr>
                <tr>
                    <td className="date">4</td>
                    <td className="date">4</td>
                    <td className="date">4</td>
                    <td className="date">4</td>
                    <td className="date">4</td>
                    <td className="date">4</td>
                    <td className="date">4</td>
                </tr>
                <tr>
                    <td className="date">3</td>
                    <td className="date">3</td>
                    <td className="date">3</td>
                    <td className="date">3</td>
                    <td className="date">3</td>
                    <td className="date">3</td>
                    <td className="date">3</td>
                </tr>
                <tr>
                    <td className="date">2</td>
                    <td className="date">2</td>
                    <td className="date">2</td>
                    <td className="date">2</td>
                    <td className="date">2</td>
                    <td className="date">2</td>
                    <td className="date">2</td>
                </tr>
                <tr>
                    <td className="date">1</td>
                    <td className="date">1</td>
                    <td className="date">1</td>
                    <td className="date">1</td>
                    <td className="date">1</td>
                    <td className="date">1</td>
                    <td className="date">1</td>
                </tr>
            </tbody>
        </table>
    </CalendarSection>
    )
}
