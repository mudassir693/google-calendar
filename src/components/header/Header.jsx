import React,{useContext} from 'react'
import Calender from '../../assets/calendar.png'
import { CalContext } from './../../context/ProjectContext';
import {getMonth} from '../../utils/functions'
import day from 'dayjs'

function Header() {
    const {monthCtx,setMonthCtx} = useContext(CalContext)

    const handleNextMonth = ()=>{
        setMonthCtx(prev=>prev+1)
    }
    const handlePrevMonth = ()=>{
        setMonthCtx(prev=>prev-1)
    }
    const handleToday = ()=>{
        setMonthCtx(day().month())
    }
  return (
    <div className="header flex justify-between items-center py-3 px-8">
        <div className="right flex items-center">
            <div className="icon flex items-center text-gray-700 text-2xl font-normal">
                <img className="h-[40px] object-contain" src={Calender} />
                <span className="mx-2">
                    Calendar
                </span>
            </div>
            <div onClick={handleToday} className="todayBtn border border-gray-100 rounded-lg text-gray-700 mx-4 py-2 px-2 font-medium text-sm cursor-pointer ">
                Today
            </div>
            <div className="schevrons flex items-center mx-5">
                <div onClick={handlePrevMonth} className="right text-gray-700 mx-2 cursor-pointer">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div onClick={handleNextMonth} className="right text-gray-700 mx-2 cursor-pointer">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="monthname text-gray-700 text-xl">
                {day(new Date(day().year(),monthCtx)).format('MMMM YYYY')}
            </div>
        </div>
        <div className="left">
        </div>
    </div>
  )
}

export default Header