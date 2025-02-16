import React, { useEffect, useState, useContext } from 'react';
import Day from '../components/day/Day';
import { getMonth } from '../utils/functions';
import { CalContext } from '../context/ProjectContext';
import EventModal from '../components/eventModal/EventModal';

function Calendar() {
    const [monthData, setMonthData] = useState(null);
    const { monthCtx, isModalOpen, triggerDayReRender } = useContext(CalContext);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            console.log('fetching month data...');
            const month = getMonth(monthCtx);
            setMonthData(month);
            triggerDayReRender(prev => !prev);
        }
        return () => {
            mounted = false;
        };
    }, [monthCtx, triggerDayReRender]);

    console.log('monthData: ', monthData);

    return (
        <div className="calendar-container w-full h-[90vh] grid grid-cols-7 grid-rows-5">
            {isModalOpen && <EventModal />}
            {monthData?.map((week, index) => (
                <React.Fragment key={index}>
                    {week?.map((day, idx) => (
                        <Day key={idx} day={day} weekIdx={index} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Calendar;
