import React, { useEffect, useState, useContext } from 'react';
import Day from '../components/day/Day';
import { getMonth } from '../utils/functions';
import { CalContext } from '../context/ProjectContext';
import EventModal from '../components/eventModal/EventModal';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState();
    const { monthCtx, isModalOpen, triggerDayReRender } = useContext(CalContext);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            console.log('currentMonth: ', getMonth());
            setCurrentMonth(getMonth(monthCtx));
            triggerDayReRender(prev => !prev);
        }
        return () => {
            isMounted = false;
        };
    }, [monthCtx, triggerDayReRender]);

    console.log('currentMonth: ', currentMonth);

    return (
        <div className="relative w-full h-[90vh] grid grid-cols-7 grid-rows-5">
            {isModalOpen && <EventModal />}
            {currentMonth?.map((week, weekIdx) => (
                <React.Fragment key={weekIdx}>
                    {week?.map((day, dayIdx) => (
                        <Day key={dayIdx} day={day} weekIdx={weekIdx} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Calendar;
