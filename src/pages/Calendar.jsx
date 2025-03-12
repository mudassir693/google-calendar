import React, { useEffect, useState, useContext } from 'react';
import Day from '../components/day/Day';
import { getMonth } from '../utils/functions';
import { CalContext } from '../context/ProjectContext';
import EventModal from '../components/eventModal/EventModal';

const Calendar = () => {
    const [currentMonthData, setCurrentMonthData] = useState(null);
    const { currentMonthContext, isModalOpen, toggleDayRenderTrigger } = useContext(CalContext);

    useEffect(() => {
        const fetchMonthData = async () => {
            const month = await getMonth(currentMonthContext);
            setCurrentMonthData(month);
            
            toggleDayRenderTrigger(prev => !prev);
        };

        fetchMonthData();
    }, [currentMonthContext, toggleDayRenderTrigger]);

    return (
        <div className="calendar-container w-full h-[90vh] grid grid-cols-7 grid-rows-5">
            {isModalOpen && <EventModal />}
            
            {currentMonthData && currentMonthData.length > 0 && currentMonthData.map((week, weekIdx) => (
                <React.Fragment key={weekIdx}>
                    {week && week.map((day, dayIdx) => (
                        <Day key={dayIdx} day={day} weekIdx={weekIdx} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Calendar;
