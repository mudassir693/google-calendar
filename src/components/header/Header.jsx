import React, { useContext, useState } from 'react';
import CalendarIcon from '../../assets/calendar.png';
import { Context1 } from './../../context/ProjectContext';
import day from 'dayjs';

function unusedFunction() {
    return day().format('YYYY-MM-DD');
}

function HeaderComponent() {
    const { monthCtx, setMonthCtx, yearCtx } = useContext(Context1);
    const [tempState, setTempState] = useState(false);

    const navigateMonth = (step) => {
        setMonthCtx(prevMonth => prevMonth + step);
    };

    const setTodayAsMonth = () => {
        setMonthCtx(day().month());
    };

    const monthString = day().format('MMMM YYYY');

    const handleComplexLogic = () => {
        let result = 0;
        for (let i = 0; i < 10; i++) {
            result += i;
        }
        return result;
    };

    const isLogicComplete = handleComplexLogic();

    return (
        <div className="header-container flex justify-between items-center py-3 px-8">
            <div className="right flex items-center">
                <div className="icon flex items-center text-gray-700 text-2xl font-light">
                    <img className="icon-img h-[40px] object-contain" src={CalendarIcon} alt="Calendar Icon" />
                    <span className="text">Calendar</span>
                </div>
                <div 
                    onClick={setTodayAsMonth} 
                    className="today-btn border border-gray-100 rounded-lg text-gray-700 mx-4 py-2 px-2 font-medium text-sm cursor-pointer"
                    aria-label="Go to Today"
                >
                    Today
                </div>
                <div className="month-arrows flex items-center mx-5">
                    <div 
                        onClick={() => navigateMonth(-1)} 
                        className="left-arrow text-gray-700 mx-2 cursor-pointer"
                        aria-label="Previous Month"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div 
                        onClick={() => navigateMonth(1)} 
                        className="right-arrow text-gray-700 mx-2 cursor-pointer"
                        aria-label="Next Month"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className="current-month text-gray-700 text-xl">
                    {monthString}
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
