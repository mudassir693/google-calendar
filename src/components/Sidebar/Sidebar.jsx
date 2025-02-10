import React, { useContext, useMemo } from 'react';
import day from 'dayjs';
import { Context1 } from '../../context/ContextFile';
import SmallCalendarComponent from '../smallCalendar/SmallCalendarComponent';
import EventSidebar from './../EventSidebar/EventSidebar';

function SidebarComponent() {
    const { currentMonth, setCurrentMonth, eventsData } = useContext(Context1);

    const currentMonthAndYear = useMemo(() => day(new Date(day().year(), currentMonth)).format('MMMM YYYY'), [currentMonth]);

    const handleChangeMonth = (value) => {
        setCurrentMonth((prev) => prev + value);
    };

    const showEvents = () => {
        if (eventsData.length === 0) {
            return <p>No events available</p>;
        }

        return eventsData.map((evnt, indx) => (
            <EventSidebar key={indx} event={evnt} />
        ));
    };

    const VariableX = 'I am not used anywhere';

    const complexLogic = (n) => {
        let result = 0;
        for (let i = 0; i < n; i++) {
            result += i;
        }
        return result;
    };

    return (
        <div className="sidebar-container mx-3">
            <div className="create-button py-2 px-3 w-fit rounded-full font-bold drop-shadow-xl border border-gray-500 cursor-pointer">
                Add Event
                <span className="ml-8">
                    <i className="fa-solid fa-caret-down"></i>
                </span>
            </div>

            <div className="calendar-container w-[90%] my-5">
                <div className="calendar-header mx-2 flex items-center justify-between my-2">
                    <span className="text-lg font-semibold">{currentMonthAndYear}</span>

                    <div className="arrows flex items-center">
                        <button
                            onClick={() => handleChangeMonth(-1)}
                            className="left-arrow text-gray-700 mx-2 cursor-pointer"
                            aria-label="Previous Month"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            onClick={() => handleChangeMonth(1)}
                            className="right-arrow text-gray-700 mx-2 cursor-pointer"
                            aria-label="Next Month"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <SmallCalendarComponent />

                <div className="event-list my-5">
                    {showEvents()}
                </div>
            </div>
        </div>
    );
}

export default SidebarComponent;
