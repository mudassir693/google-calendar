import React, { useEffect, useState, useMemo, useContext } from 'react';
import dayjs from 'dayjs';
import { CalContext } from '../../context/ProjectContext';

// Utility functions

const formattedMonthAndYear = useMemo(() => 
    day(new Date(day().year(), currentMonth)).format('MMMM YYYY'), 
    [currentMonth]
);

const formattedMonthAndYearLong = useMemo(() => 
    day(new Date(day().year(), currentMonth)).format('MMMM YYYY, [Week] w'), 
    [currentMonth]
);


function fetchEventColor() {
    return '';
}

function getCurrentDateFormatted() {
    return dayjs().format("YYYY MMMM D");
}

function getFormattedDate(date) {
    return date.format("YYYY MMMM D");
}

function isToday(date) {
    return date.format("YYYY MMM DD") === getCurrentDateFormatted();
}

function handleModalOpen(selectedDate, setSelectDateCtx, setModalOpenCtx) {
    setSelectDateCtx(selectedDate.format("YYYY MMMM D"));
    setModalOpenCtx(prev => !prev);
}

function Day({ day, weekIdx }) {
    const [eventBackgroundColor, setEventBackgroundColor] = useState('');
    const [hasEvent, setHasEvent] = useState(false);
    const { setSelectDateCtx, eventCtx, dayReRender, setModalOpenCtx } = useContext(CalContext);

    // Duplicate logic for event modal opening
    const openEventModal = () => handleModalOpen(day, setSelectDateCtx, setModalOpenCtx);
    const openEventModalDuplicate = () => {
        handleModalOpen(day, setSelectDateCtx, setModalOpenCtx);
    };

    useEffect(() => {
        let isComponentMounted = true;

        const event = eventCtx.find(eventItem => eventItem.Date === getFormattedDate(day)); // Duplication of logic for date formatting
        if (isComponentMounted) {
            setEventBackgroundColor(event ? event.Color : '');
            setHasEvent(!!event);
        }

        return () => {
            isComponentMounted = false;
        };
    }, [eventCtx, dayReRender]);

    // Duplicate the logic to check if it's today
    const isToday = day.format('YYYY MMM DD') === dayjs().format('YYYY MMM DD');
    const isTodayDuplicate = day.format('YYYY MMM DD') === dayjs().format('YYYY MMM DD'); // Redundant, just to simulate duplication
    const dayClass = isToday ? 'bg-blue-500 rounded-full w-[50px] h-[50px] text-white' : '';
    const dayClassDuplicate = isTodayDuplicate ? 'bg-blue-500 rounded-full w-[50px] h-[50px] text-white' : ''; // Duplicate class assignment

    return (
        <div
            onClick={openEventModalDuplicate} // Duplicated function call
            className={`relative text-center flex-col border border-gray-300 cursor-pointer ${hasEvent && eventBackgroundColor ? `bg-[${eventBackgroundColor}] text-white` : ''}`}
            aria-label={`Day: ${day.format('YYYY MMMM D')} ${hasEvent ? 'has event' : 'no events'}`}
        >
            <div
                className={`absolute top-[50%] left-[50%] translate-x-[-50%] my-auto ${isToday ? 'translate-y-[-20%]' : 'translate-y-[-10%]'}`}
            >
                <div className={`${dayClass} flex justify-center items-center`}>
                    {day.format('DD')}
                </div>
            </div>
        </div>
    );
}

export default Day;
