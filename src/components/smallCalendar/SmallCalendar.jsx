import React, { useEffect,useContext,useState } from 'react'
import {getMonth} from '../../utils/functions'
import {CalContext} from '../../context/ProjectContext'
import dayjs from 'dayjs'
import Day from '../day/Day'
function SmallCalendar() {
    const {monthCtx,setMonthCtx} = useContext(CalContext)
    const [month,setMonth] = useState()
    useEffect(()=>{
        let start = true
        start&&setMonth(getMonth(monthCtx))
        return ()=>{
            start = false
        }
    },[monthCtx])
    
  return (
    <div className='grid grid-cols-7 grid-rows-6 text-sm font-light'>
        <div className="text-center">S</div>
        <div className="text-center">M</div>
        <div className="text-center">T</div>
        <div className="text-center">W</div>
        <div className="text-center">T</div>
        <div className="text-center">F</div>
        <div className="text-center">S</div>
        {month?.map(week=>(
            <React.Fragment>
                {week.map(day=>(
                    // <Day day={day} />
                    <div className={`text-center  ${day.format("YYYY MMM DD")==dayjs().format("YYYY MMM DD")?'bg-blue-500 rounded-lg text-white':''}`}>
                        {day.format('D')}
                    </div>
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}

export default SmallCalendar