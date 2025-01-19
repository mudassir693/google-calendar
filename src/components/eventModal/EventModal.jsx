import React, { useContext, useEffect, useCallback } from 'react';
import { CalContext } from '../../context/ProjectContext';

const colorOptions = ['#e1b0ff', '#0e9aa7', '#fe8a71', '#7f8e9e'];

function EventModal() {
    const { setEventCtx, selectDateCtx, setModalOpenCtx } = useContext(CalContext);
    const [selectedColor, setSelectedColor] = React.useState(colorOptions[0]);
    const [eventTitle, setEventTitle] = React.useState('');

    const handleClose = () => setModalOpenCtx(false);

    // Handle event submission
    const handleSubmit = useCallback(() => {
        if (eventTitle.trim()) {
            setEventCtx((prev) => [
                ...prev,
                { Title: eventTitle, Date: selectDateCtx, Color: selectedColor },
            ]);
            handleClose(); // Close the modal after event is added
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
        <div
            className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-10 p-5"
            role="dialog"
            aria-labelledby="modal-title"
            aria-hidden={false}
        >
            <div className="flex justify-end">
                <button
                    aria-label="Close modal"
                    onClick={handleClose}
                    className="text-gray-700 hover:text-gray-500"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
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
            <div className="flex items-center justify-center mb-5">
                {colorOptions.map((color) => (
                    <div
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`cursor-pointer mx-2 w-9 h-9 rounded-full flex justify-center items-center ${
                            selectedColor === color ? 'border-4 border-blue-500' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                    >
                        {selectedColor === color && <i className="fa-solid fa-check text-white"></i>}
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <button
                    onClick={handleSubmit}
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
