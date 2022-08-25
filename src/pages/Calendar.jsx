import React, { useEffect,useState,useContext } from 'react'
import Day from '../components/day/Day'
import {getMonth} from '../utils/functions'
import { CalContext} from '../context/ProjectContext'
import EventModal from '../components/eventModal/EventModal'
function Calendar() {
    const [month,setMonth] = useState()
    const {monthCtx,modalOpenCtx,setDayReRender} = useContext(CalContext)
    useEffect(()=>{
        let start = true
        start&&console.log('month: ',getMonth())
        setMonth(()=>getMonth(monthCtx))
        setDayReRender((prev)=>!prev)
        return ()=>{
          start = false
        }
      },[monthCtx])
      console.log('month: ',month)
  return (
    <div className="relative w-100 h-[90vh] grid grid-cols-7 grid-rows-5">
        {modalOpenCtx&&<EventModal />}
        {month?.map((week,idx)=>(
            <React.Fragment key={idx} className="">
                {week?.map((day,id)=>(
                    // <React.Fragment >
                        <Day key={id} day={day} weekIdx={idx}/>
                    // </React.Fragment>
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}

export default Calendar