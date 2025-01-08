import React, { createContext, useState } from 'react';
import day from 'dayjs';

export const CalContext = createContext({});

function ProjectContext({ children }) {
    const [monthCtx, setMonthCtx] = useState(day().month());
    const [selectDateCtx, setSelectDateCtx] = useState();
    const [modalOpenCtx, setModalOpenCtx] = useState(false);
    const [dayReRender, setDayReRender] = useState(false);

    const [eventCtx, setEventCtx] = useState([]);

    const resetContext = () => {
        setMonthCtx(day().month());
        setSelectDateCtx(null);
        setModalOpenCtx(false);
        setDayReRender(false);
        setEventCtx([]);
    };

    return (
        <CalContext.Provider value={{
            setDayReRender,
            dayReRender,
            modalOpenCtx,
            setModalOpenCtx,
            setMonthCtx,
            setEventCtx,
            monthCtx,
            eventCtx,
            setSelectDateCtx,
            selectDateCtx,
            resetContext,
        }}>
            {children}
        </CalContext.Provider>
    );
}

export default ProjectContext;
