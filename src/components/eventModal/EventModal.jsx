import React, { useContext } from 'react';
import { CalContext } from '../../context/ProjectContext';

const colorOptions = ['#e1b0ff', '#0e9aa7', '#fe8a71', '#7f8e9e'];

function fetchColor(){
    return ''
}

function EventModal() {
    const { setEventCtx, selectDateCtx, setModalOpenCtx } = useContext(CalContext);
    const [selectedColor, setSelectedColor] = React.useState(colorOptions[0]);
    const [eventTitle, setEventTitle] = React.useState('');

    const handleSubmit = () => {
        if (eventTitle.trim()) {
            setEventCtx(prev => [...prev, { Title: eventTitle, Date: selectDateCtx, Color: selectedColor }]);
            setModalOpenCtx(false);
        }
    };

    return (
        <div className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-10">
            <div className="header bg-gray-200 flex justify-end py-2 px-3">
                <i className="fa-solid fa-xmark cursor-pointer" onClick={() => setModalOpenCtx(false)}></i>
            </div>
            <div className="titleSection text-2xl text-gray-700 w-3/4 mx-auto my-5">
                {selectDateCtx}
            </div>
            <div className="titleSection w-3/4 mx-auto my-5">
                <input 
                    onChange={(e) => setEventTitle(e.target.value)} 
                    className="w-full border-b-3 border-blue-500 text-3xl text-gray-700 outline-none" 
                    value={eventTitle} 
                    placeholder="Add Event" 
                    type="text" 
                />
            </div>
            <div className="tagSection w-3/4 mx-auto mb-5 flex items-center justify-center">
                {colorOptions.map((color) => (
                    <div 
                        key={color} 
                        onClick={() => setSelectedColor(color)} 
                        className={`cursor-pointer mx-2 w-9 h-9 rounded-full flex justify-center items-center text-white`} 
                        style={{ backgroundColor: color }}
                    >
                        {selectedColor === color && <i className="fa-solid fa-check"></i>}
                    </div>
                ))}
            </div>
            <div className="saveBtn flex justify-end mx-5 my-2">
                <div 
                    onClick={handleSubmit} 
                    className="py-2 px-5 rounded-lg bg-blue-500 text-white text-sm cursor-pointer"
                >
                    Save
                </div>
            </div>
        </div>
    );
}

export default EventModal;
