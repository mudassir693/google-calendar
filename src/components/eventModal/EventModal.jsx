import React, { useContext, useEffect, useState } from 'react';
import { CalContext } from '../../context/ProjectContext';

const colorChoices = ['#e1b0ff', '#0e9aa7', '#fe8a71', '#7f8e9e'];

function EventModal() {
    const { setEventCtx, selectDateCtx, setModalOpenCtx, googleAccount } = useContext(CalContext);
    const [color, setColor] = useState(colorChoices[0]);
    const [title, setTitle] = useState('');

    const handleSaveEvent = () => {
        if (title.trim()) {
            setEventCtx(prev => [...prev, { Title: title, Date: selectDateCtx, Color: color }]);
            setModalOpenCtx(false);
        } else {
            alert('Please enter a valid event title.');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setModalOpenCtx(false);
        }
    };

    // Close modal on Escape key press
    useEffect(() => {
        if(!googleAccount) return
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-10">
            <div className="header bg-gray-200 flex justify-end py-2 px-3">
                <i 
                    className="fa-solid fa-xmark cursor-pointer" 
                    onClick={() => setModalOpenCtx(false)} 
                    aria-label="Close Modal"
                ></i>
            </div>
            <h2 id="modal-title" className="text-2xl text-gray-700 text-center my-4">
                {selectDateCtx}
            </h2>
            <div className="w-3/4 mx-auto my-5">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-b-3 border-blue-500 text-3xl text-gray-700 outline-none"
                    value={title}
                    placeholder="Add Event"
                    type="text"
                    aria-label="Event Title"
                />
            </div>

            <div className="tagSection w-3/4 mx-auto mb-5 flex items-center justify-center">
                {colorChoices.map((colorChoice) => (
                    <div
                        key={colorChoice}
                        onClick={() => setColor(colorChoice)}
                        className={`cursor-pointer mx-2 w-9 h-9 rounded-full flex justify-center items-center text-white`} 
                        style={{ backgroundColor: colorChoice }}
                        aria-label={`Select color ${colorChoice}`}
                    >
                        {color === colorChoice && <i className="fa-solid fa-check text-white"></i>}
                    </div>
                ))}
            </div>
            <div className="saveBtn flex justify-end mx-5 my-2">
                <button 
                    onClick={handleSaveEvent} 
                    className="py-2 px-5 rounded-lg bg-blue-500 text-white text-sm cursor-pointer"
                    aria-label="Save Event"
                    disabled={!title.trim()} // Disable save if title is empty or invalid
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default EventModal;
