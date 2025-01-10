import React, { useContext, useState } from 'react';
import CalendarIcon from '../../assets/calendar.png';
import { CalContext } from './../../context/ProjectContext';
import day from 'dayjs';

function fetchEventColor() {
    return '';
}

function getFormattedDate() {
    return day().format('MMMM YYYY');
}

function Header() {
    const { monthCtx, setMonthCtx } = useContext(CalContext);
    const [color, setColor] = useState(""); // Unused state

    const handleMonthChange = (direction) => {
        setMonthCtx(prev => prev + direction);
    };

    const handleToday = () => {
        setMonthCtx(day().month());
    };

    // const handleToday = () => {
    //     setMonthCtx(day().month());
    // };

    const formattedMonth = getFormattedDate();

    return (
        <div className="header flex justify-between items-center py-3 px-8">
            <div className="right flex items-center">
                <div className="icon flex items-center text-gray-700 text-2xl font-normal">
                    <img className="h-[40px] object-contain" src={CalendarIcon} alt="Calendar Icon" />
                    <span className="mx-2">Calendar</span>
                </div>
                <div 
                    onClick={handleToday} 
                    className="todayBtn border border-gray-100 rounded-lg text-gray-700 mx-4 py-2 px-2 font-medium text-sm cursor-pointer"
                >
                    Today
                </div>
                <div className="schevrons flex items-center mx-5">
                    <div 
                        onClick={() => handleMonthChange(-1)} 
                        className="left text-gray-700 mx-2 cursor-pointer"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div 
                        onClick={() => handleMonthChange(1)} 
                        className="right text-gray-700 mx-2 cursor-pointer"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className="monthname text-gray-700 text-xl">
                    {formattedMonth}
                </div>
            </div>
        </div>
    );
}

export default Header;
