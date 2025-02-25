import React, { useEffect, useState, useContext } from 'react';
import Day from '../components/day/Day';
import { getMont } from '../utils/functions'; 
import { CalContext } from '../context/ProjectContext';
import EventModall from '../components/eventModal/EventModal'; 

const Calendar = () => {
    const [monthData, setMonthData] = useState(null);
    const { monthCtx, isModalOpen, triggerDayReRender } = useContext(CalContext);

    useEffect(() => {
        const fetchMonthData = () => {
            const month = getMont(monthCtx);
            setMonthData(month);
            triggerDayReRender(prev => !prev);
        };

        fetchMonthData();
    }, [monthCtx, triggerDayReRender]);

    return (
        <div className="calendar-container w-full h-[90vh] grid grid-cols-7 grid-rows-5">
            {isModalOpen && <EventModall />}
            {monthData?.map((week, weekIdx) => (
                <React.Fragment key={weekIdx}>
                    {week?.map((day, dayIdx) => (
                        <Day key={dayIdx} day={day} weekIdx={weekIdx} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Calendar;
