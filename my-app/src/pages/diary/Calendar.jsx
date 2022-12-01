import styled from "styled-components";
import { useEffect, useState } from "react";
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
    const [calendar, setCalendar] = useState(null)
    const [month, setMonth] = useState(new Date().getMonth() + 1)
    const [year, setYear] = useState(new Date().getFullYear())

    function displayCalendar(newYear, newMonth){
        const time = new Date(newYear, newMonth - 1, 1);
        const timeLength = new Date(newYear, newMonth, 0).getDate(); // 한 달의 길이
        // let year = time.getFullYear(),
            // month = time.getMonth(),
        let date = time.getDate();
        let day = time.getDay();
        let days = Array(42).fill(0)
        for (let i = day; i < day + timeLength; i++) {
            days[i]= date++
        }

        let result = [];
        let temp = [];
        for (let i =0; i < 6; i++){
            for (let j = 0; j <7; j++){
                temp.push(days.shift())
            }
            result.push(temp);
            temp = [];
        }

        let renderCalendar = []
        let temp2 = [];
        let idx = 1;
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 7; j++){
                if (result[i][j] !== 0){
                    temp2.push(<td key={idx++} className="date">{result[i][j]}</td>)
                }
                else {
                    temp2.push(<td key={idx++} className="date"></td>)
                }
            }
            renderCalendar.push(<tr key={idx++}>{temp2}</tr>)
            temp2 = [];
        }
        return renderCalendar;
    }

    useEffect(() => {
        setCalendar(displayCalendar(year, month))
    }, [year, month])
    
    function handleCalendar(e){
        const BtnType = e.currentTarget.id;
        // console.log(BtnType);
        if (BtnType === "prev"){
            if (month === 1){
                setMonth(12)
                setYear(year-1)
            }else {
                setMonth(month-1)
            }
        }
        else if (BtnType === "next"){
            if (month === 12){
                setMonth(1)
                setYear(year+1)
            }else {
                setMonth(month+1)
            }
        }
        setCalendar(displayCalendar(year, month))
    }
    return (
    <CalendarSection>
        <Navigator>
            <BtnMonth onClick={handleCalendar} id="prev"><FaChevronLeft/></BtnMonth>
            <time dateTime="2022-11">
                <span className="year">{year}</span>년
                <span className="month"> {month}</span>월
            </time>
            <BtnMonth onClick={handleCalendar} id="next"><FaChevronRight/></BtnMonth>
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
                {calendar}
            </tbody>
        </table>
    </CalendarSection>
    )
    
}
