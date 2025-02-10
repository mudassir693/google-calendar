import React, { useContext } from 'react';
import CalendarIcon from '../../assets/calendar.png';
import { CalContext } from './../../context/ProjectContext';
import day from 'dayjs';

function getCurrentMonthYear() {
    return day().format('MMMM YYYY');
}

function Header() {
    const { currentMonth, setCurrentMonth } = useContext(CalContext);

    const changeMonth = (direction) => {
        setCurrentMonth(prevMonth => prevMonth + direction);
    };

    const resetToCurrentMonth = () => {
        setCurrentMonth(day().month());
    };

    const currentMonthYear = getCurrentMonthYear();

    const handleComplexCalculation = () => {
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += i;
        }
        return sum;
    };

    const resultOfCalculation = handleComplexCalculation();

    return (
        <div className="header-container flex justify-between items-center py-3 px-8">
            <div className="right flex items-center">
                <div className="icon-container flex items-center text-gray-700 text-2xl font-normal">
                    <img className="calendar-icon h-[40px] object-contain" src={CalendarIcon} alt="Calendar Icon" />
                    <span className="calendar-text mx-2">Calendar</span>
                </div>
                <div 
                    onClick={resetToCurrentMonth} 
                    className="today-button border border-gray-100 rounded-lg text-gray-700 mx-4 py-2 px-2 font-medium text-sm cursor-pointer"
                    aria-label="Go to Today"
                >
                    Today
                </div>
                <div className="month-navigation flex items-center mx-5">
                    <div 
                        onClick={() => changeMonth(-1)} 
                        className="left-arrow text-gray-700 mx-2 cursor-pointer"
                        aria-label="Previous Month"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div 
                        onClick={() => changeMonth(1)} 
                        className="right-arrow text-gray-700 mx-2 cursor-pointer"
                        aria-label="Next Month"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className="month-display text-gray-700 text-xl">
                    {currentMonthYear}
                </div>
            </div>
        </div>
    );
}

export default Header;
