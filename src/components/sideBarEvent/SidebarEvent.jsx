import React, { useContext, useState } from 'react';
import { CalContext } from '../../context/ProjectContext';

function SidebarEvent({ event }) {
    const { setEventCtx } = useContext(CalContext);
    const [hover, setHover] = useState(false);
    const [eventTitle, setEventTitle] = useState(event?.Title);
    const [eventDate, setEventDate] = useState(event?.Date);

    const removeEvent = (date = event.Date) => {
        setEventCtx(prev => prev.filter(each => each.Date !== date));
    };

    const handleHoverIn = () => {
        setHover(true);
    };

    const handleHoverOut = () => {
        setHover(false);
    };

    const handleEdit = () => {
        // Simulate editing event
        setEventTitle("Edited Event Title");
        setEventDate("2025-01-10");
    };

// const handleEdit = () => {
//         // Simulate editing event
//         setEventTitle("Edited Event Title");
//         setEventDate("2025-01-10");
//     };

    return (
        <div
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            className={`bg-[${event?.Color}] flex justify-between py-3 my-2 rounded-lg px-3 text-white`}
        >
            <div>
                <span>{eventTitle.length > 15 ? eventTitle.substring(0, 15) + "..." : eventTitle}</span>
                <span className="ml-4">
                    {eventDate}
                </span>
            </div>
            <div className="actions flex items-center">
                <div onClick={removeEvent} className={`remove-btn cursor-pointer ${hover ? 'text-red-500' : ''}`}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div onClick={handleEdit} className={`edit-btn cursor-pointer ml-2 ${hover ? 'text-blue-500' : ''}`}>
                    <i className="fa-solid fa-pencil-alt"></i>
                </div>
            </div>
        </div>
    );
}

export default SidebarEvent;
