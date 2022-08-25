import React,{useState,useContext} from 'react'
import {CalContext} from '../../context/ProjectContext'
function EventModal() {
    const [selectedColor,setSelectedColor] = useState('#e1b0ff')
    const {setEventCtx,eventCtx,selectDateCtx,modalOpenCtx,setModalOpenCtx} = useContext(CalContext)
    const [event,setEvent] = useState('')

    const submithandler = ()=>{
        setEventCtx((prev)=>[...prev,{Title:event,Date:selectDateCtx,Color:selectedColor}])
        setModalOpenCtx(false)
    }
  return (
    <div className="absolute top-[50%] translate-y-[-50%] shadow-lg rounded-lg overflow-hidden bg-white z-10 translate-x-[-50%] left-[50%] w-[50%]">
        <div className="header w-full  bg-gray-200 flex justify-end py-2 px-3  ">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="titleSection text-2xl text-gray-700 w-[70%] mx-auto my-5">
            {selectDateCtx}
        </div>
        <div className="titleSection w-[70%] mx-auto my-5">
            <div className="input border-b-[3px] border-blue-500">
                <input onChange={(e)=>setEvent(e.target.value)} className="border-none outline-none text-3xl text-gray-700" value={event} placeholder="Add Event" type="text" name="event" />
            </div>
        </div>
        <div className="tagSection w-[70%] mx-auto mb-5 flex items-center">
            <div onClick={()=>setSelectedColor('#e1b0ff')} className="shade cursor-pointer mr-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-white bg-[#e1b0ff]">
                {selectedColor=="#e1b0ff" && <i class="fa-solid fa-check"></i>}
            </div>
            <div onClick={()=>setSelectedColor("#0e9aa7")} className="shade cursor-pointer mx-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-white bg-[#0e9aa7]">
                {selectedColor=="#0e9aa7" && <i class="fa-solid fa-check"></i>}
            </div>
            <div onClick={()=>setSelectedColor("#fe8a71")} className="shade cursor-pointer mx-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-white bg-[#fe8a71]">
                {selectedColor=="#fe8a71" && <i class="fa-solid fa-check"></i>}
            </div>
            <div onClick={()=>setSelectedColor("#7f8e9e")} className="shade cursor-pointer mx-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-white bg-[#7f8e9e]">
                {selectedColor=="#7f8e9e" && <i class="fa-solid fa-check"></i>}
            </div>
        </div>
        <div className="saveBtn flex justify-end mx-5 my-2">
            <div onClick={submithandler} className="save py-2 px-5 rounded-lg bg-blue-500 text-white text-sm cursor-pointer">
                Save
            </div>
        </div>
    </div>
  )
}

export default EventModal