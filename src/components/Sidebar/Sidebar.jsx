import React, { useContext, useMemo } from 'react';
import day from 'dayjs';
import { CalContext } from '../../context/ProjectContext';
import SmallCalendar from '../smallCalendar/SmallCalendar';
import SidebarEvent from './../sideBarEvent/SidebarEvent';

function Sidebar() {
    const { monthCtx, setMonthCtx, eventCtx } = useContext(CalContext);

    const currentMonthYear = useMemo(
        () => day(new Date(day().year(), monthCtx)).format('MMMM YYYY'),
        [monthCtx]
    );

    const handleMonthChange = (direction) => {
        setMonthCtx((prev) => prev + direction);
    };

    const renderEvents = () => {
        if (!eventCtx.length) {
            return <p>No events to display</p>;
        }

        return eventCtx.map((event) => (
            <SidebarEvent key={event.id || event.name} event={event} />
        ));
    };

    return (
        <div className="sidebar mx-3">
            <div className="create-btn py-2 px-3 w-fit rounded-full font-semibold drop-shadow-xl border border-gray-500 cursor-pointer">
                Create
                <span className="ml-8">
                    <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </span>
            </div>

            <div className="w-[90%] my-5">
                <div className="mx-2 flex items-center justify-between my-2">
                    <span className="text-lg font-semibold">{currentMonthYear}</span>

                    <div className="schevrons flex items-center">
                        <button
                            onClick={() => handleMonthChange(-1)}
                            className="left text-gray-700 mx-2 cursor-pointer"
                            aria-label="Previous Month"
                        >
                            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                        </button>
                        <button
                            onClick={() => handleMonthChange(1)}
                            className="right text-gray-700 mx-2 cursor-pointer"
                            aria-label="Next Month"
                        >
                            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <SmallCalendar />

                <div className="my-5">
                    {renderEvents()}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
