import React, { useContext, useEffect, useState, useMemo } from 'react';
import dayjs from 'dayjs';
import { CalContext } from '../../context/ProjectContext';

function Day({ day, weekIdx }) {
    const [eventBg, setEventBg] = useState('');
    const [hasEvent, setHasEvent] = useState(false);
    const { setSelectDateCtx, eventCtx, dayReRender, setModalOpenCtx } = useContext(CalContext);

    const openModal = () => {
        setSelectDateCtx(day.format('YYYY MMMM D'));
        setModalOpenCtx(prev => !prev);
    };

    // Memoize the event background color to prevent unnecessary recalculations
    const event = useMemo(() => eventCtx.find(each => each.Date === day.format('YYYY MMMM D')), [eventCtx, day]);

    useEffect(() => {
        if (event) {
            setEventBg(event.Color);
            setHasEvent(true);
        } else {
            setEventBg('');
            setHasEvent(false);
        }
    }, [event]);

    const isToday = day.format('YYYY MMM DD') === dayjs().format('YYYY MMM DD');
    const dayClass = isToday ? 'bg-blue-500 rounded-full w-[50px] h-[50px] text-white' : '';

    return (
        <div
            onClick={openModal}
            className={`relative text-center flex-col border border-gray-300 cursor-pointer ${hasEvent && eventBg ? `bg-[${eventBg}] text-white` : ''}`}
            aria-label={`Day: ${day.format('YYYY MMMM D')}`}
        >
            {weekIdx === 0 && (
                <div className="text-sm text-gray-600">
                    {day.format('ddd')}
                </div>
            )}

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
