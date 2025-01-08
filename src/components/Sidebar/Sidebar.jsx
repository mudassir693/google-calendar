import React, { useState, useContext, useEffect } from 'react';
import SmallCalendar from '../smallCalendar/SmallCalendar';
import day from 'dayjs';
import { CalContext } from '../../context/ProjectContext';
import SidebarEvent from './../sideBarEvent/SidebarEvent';

function Sidebar() {
    const { monthCtx, setMonthCtx, eventCtx } = useContext(CalContext);

    useEffect(() => {
        console.log('Event Context Updated: ', eventCtx);
    }, [eventCtx]);

    const handleNextMonth = () => {
        setMonthCtx(prev => prev + 1);
    };

    const handlePrevMonth = () => {
        setMonthCtx(prev => prev - 1);
    };

    return (
        <div className="sidebar mx-3">
            <div className="create-btn py-2 px-3 w-fit rounded-full font-semibold drop-shadow-xl border border-gray-500 cursor-pointer">
                Create
                <span className="ml-8">
                    <i className="fa-solid fa-caret-down"></i>
                </span>
            </div>

            <div className="w-[90%] my-5">
                <div className="mx-2 flex items-center justify-between my-2">
                    {day(new Date(day().year(), monthCtx)).format('MMMM YYYY')}
                    <div className="schevrons flex items-center">
                        <div onClick={handlePrevMonth} className="left text-gray-700 mx-2 cursor-pointer">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <div onClick={handleNextMonth} className="right text-gray-700 mx-2 cursor-pointer">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <SmallCalendar />
                <div className="my-5">
                    {eventCtx.map((event, index) => (
                        <SidebarEvent key={index} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
