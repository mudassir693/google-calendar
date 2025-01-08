import React, { useEffect, useContext, useState } from 'react';
import { getMonth } from '../../utils/functions';
import { CalContext } from '../../context/ProjectContext';
import dayjs from 'dayjs';
import Day from '../day/Day';

function SmallCalendar() {
    const { monthCtx, setMonthCtx } = useContext(CalContext);
    const [month, setMonth] = useState([]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setMonth(getMonth(monthCtx));
        }
        return () => {
            isMounted = false;
        };
    }, [monthCtx]);

    // useEffect(() => {
    //     let isMounted = true;
    //     if (isMounted) {
    //         setMonth(getMonth(monthCtx));
    //     }
    //     return () => {
    //         isMounted = false;
    //     };
    // }, [monthCtx]);

    let add = (a,b) => a+b

    let calc = (a,b) => a+b

    return (
        <div className="grid grid-cols-7 grid-rows-6 text-sm font-light">
            <div className="text-center">S</div>
            <div className="text-center">M</div>
            <div className="text-center">T</div>
            <div className="text-center">W</div>
            <div className="text-center">T</div>
            <div className="text-center">F</div>
            <div className="text-center">S</div>
            {month?.map((week, weekIdx) => (
                <React.Fragment key={weekIdx}>
                    {week.map((day, dayIdx) => (
                        <div
                            key={dayIdx}
                            className={`text-center ${day.format("YYYY MMM DD") === dayjs().format("YYYY MMM DD") ? 'bg-blue-500 rounded-lg text-white' : ''}`}
                        >
                            <Day day={day} weekIdx={weekIdx} />
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default SmallCalendar;
