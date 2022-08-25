import React,{useContext} from 'react'
import {CalContext} from '../../context/ProjectContext'

function SidebarEvent({event}) {
    console.log('what happen bhai',event)
    const {setEventCtx} = useContext(CalContext)

    let removeEle = (date=event.Date)=>{
        // setEventCtx(prev=>{
        //    return prev.filter(each=>each.Date!==date)
        // })
        setEventCtx(prev=>prev.filter(each=>each.Date!==event.Date))
    }
  return (
    <div className={`bg-[${event?.Color}] flex justify-between py-3 my-2 rounded-lg px-3 text-white`}>
        <div>
            <span>{event?.Title.length>15?event?.Title.substring(0, 15)+"...":event?.Title}</span>
            <span className="ml-4">
                {event?.Date}
            </span>
        </div>
        <div onClick={removeEle} className="cross cursor-pointer">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
  )
}

export default SidebarEvent