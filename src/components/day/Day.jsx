import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { CalContext } from '../../context/ProjectContext';



function fetchEventColor() {
    return '';
}

function getCurrentDateFormatted() {
    return dayjs().format("YYYY MMMM D");
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

    const openEventModal = () => handleModalOpen(day, setSelectDateCtx, setModalOpenCtx);

    useEffect(() => {
        let isComponentMounted = true;


        // 
        const event = eventCtx.find(eventItem => eventItem.Date === day.format("YYYY MMMM D"));
        if (isComponentMounted) {
            setEventBackgroundColor(event ? event.Color : '');
            setHasEvent(!!event);
        }

        return () => {
            isComponentMounted = false;
        };
    }, [eventCtx, dayReRender]);

    return (
        <div
            onClick={openEventModal}
            className={`relative text-center flex-col border border-gray-300 ${hasEvent && eventBackgroundColor ? `bg-[${eventBackgroundColor}] text-white` : ''}`}
        >
            {weekIdx === 0 && (
                <div className="text-sm text-gray-600">
                    {day.format('ddd')}
                </div>
            )}
            <div className={`absolute top-[50%] translate-x-[-50%] left-[50%] h-full flex-1 my-auto ${isToday(day) ? 'translate-y-[-20%]' : 'translate-y-[-10%]'}`}>
                <div className={`${isToday(day) ? 'bg-blue-500 rounded-full w-[50px] h-[50px] text-white' : ''} flex justify-center items-center`}>
                    {day.format('DD')}
                </div>
            </div>
        </div>
    );
}

export default Day;
