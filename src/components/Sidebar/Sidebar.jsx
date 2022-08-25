import React,{useState,useContext,useEffect, useMemo} from 'react'
import SmallCalendar from '../smallCalendar/SmallCalendar'
import day from 'dayjs'
import {CalContext} from '../../context/ProjectContext'
import SidebarEvent from './../sideBarEvent/SidebarEvent';

function Sidebar() {
    const {monthCtx,setMonthCtx,eventCtx} = useContext(CalContext)

    useEffect(()=>{
        console.log('okay is it reload',eventCtx)
    },[eventCtx])

    let handleNextDate = ()=>{
        setMonthCtx((prev)=>prev+1)
    }
    let handlePrevDate = ()=>{
        setMonthCtx((prev)=>prev-1)
    }
  return (
    <div className="sidebar mx-3">
        <div className="create-btn py-2 px-3 w-[fit-content] rounded-full fond-semibold drop-shadow-xl border border-gray-500 cursor-pointer">
            create
            <span className="ml-8">
                <i class="fa-solid fa-caret-down"></i>
            </span>
        </div>

        <div className="w-[90%] my-5">
            <div className="mx-2 flex items-center justify-between my-2">
                {day(new Date(day().year(), monthCtx)).format('MMMM YYYY')}
                <div className="schevrons flex items-center">
                    <div onClick={handlePrevDate} className="right text-gray-700 mx-2 cursor-pointer">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div onClick={handleNextDate} className="right text-gray-700 mx-2 cursor-pointer">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <SmallCalendar />
            <div className="my-5">
                {eventCtx.map(each => (
                    <SidebarEvent event={each} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar