import React, { useContext, useEffect, useCallback } from 'react';
import { CalContext } from '../../context/ProjectContext';

const colorChoices = ['#e1b0ff', '#0e9aa7', '#fe8a71', '#7f8e9e'];


// function block
function fetchEventColor() {
    return '';
}

function getSelectedDate() {
    return '';
}

function isValidEventTitle(title) {
    return title.trim() !== '';
}

function handleEventModalClose(setModalOpenCtx) {
    setModalOpenCtx(false);
}

function EventModal() {
    const { setEventCtx, selectDateCtx, setModalOpenCtx } = useContext(CalContext);
    const [selectedColor, setSelectedColor] = React.useState(colorChoices[0]);
    const [eventTitle, setEventTitle] = React.useState('');

    const saveEvent = () => {
        if (isValidEventTitle(eventTitle)) {
            setEventCtx(prev => [...prev, { Title: eventTitle, Date: selectDateCtx, Color: selectedColor }]);
            handleEventModalClose(setModalOpenCtx);

        }
    }, [eventTitle, selectedColor, selectDateCtx, setEventCtx, handleClose]);

    // Close modal on "Escape" key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleClose]);

    return (

        <div className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-10">
            <div className="header bg-gray-200 flex justify-end py-2 px-3">
                <i className="fa-solid fa-xmark cursor-pointer" onClick={() => handleEventModalClose(setModalOpenCtx)}></i>

            </div>
            <h2 id="modal-title" className="text-2xl text-gray-700 text-center my-4">
                {selectDateCtx}
            </h2>
            <div className="w-3/4 mx-auto my-5">
                <input
                    onChange={(e) => setEventTitle(e.target.value)}
                    className="w-full border-b-3 border-blue-500 text-3xl text-gray-700 outline-none"
                    value={eventTitle}
                    placeholder="Add Event"
                    type="text"
                    aria-label="Event Title"
                />
            </div>

            <div className="tagSection w-3/4 mx-auto mb-5 flex items-center justify-center">
                {colorChoices.map((color) => (
                    <div 
                        key={color} 
                        onClick={() => setSelectedColor(color)} 
                        className={`cursor-pointer mx-2 w-9 h-9 rounded-full flex justify-center items-center text-white`} 

                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                    >
                        {selectedColor === color && <i className="fa-solid fa-check text-white"></i>}
                    </div>
                ))}
            </div>
            <div className="saveBtn flex justify-end mx-5 my-2">
                <div 
                    onClick={saveEvent} 

                    className="py-2 px-5 rounded-lg bg-blue-500 text-white text-sm cursor-pointer"
                    aria-label="Save Event"
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default EventModal;
