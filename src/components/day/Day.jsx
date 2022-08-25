import React,{useContext,useEffect,useState} from 'react'
import dayjs from 'dayjs'
import {CalContext} from '../../context/ProjectContext'

function Day({day,weekIdx}) {
    let [eventBg,setEventBg] = useState('')
    let [found,setFound] = useState(false)
    const {setSelectDateCtx,eventCtx,dayReRender,setModalOpenCtx} =useContext(CalContext)
    const openModal = ()=>{
        setSelectDateCtx(day.format("YYYY MMMM D"))
        setModalOpenCtx(prev=>!prev)
    }
    useEffect(()=>{
        let start = true
        // console.log('ehat happend: ',eventCtx)
        let event = eventCtx.find(each=>{
            console.log(each.Date,day.format("YYYY MMMM D"))
           return each.Date==day.format("YYYY MMMM D")
        })
        console.log('event: ',event)
        event ? setEventBg(event.Color):setEventBg('')
        event ? setFound(true):setFound(false)
        return ()=>{
            start = false
        }
    },[eventCtx,dayReRender])

  return (
    <div onClick={openModal} className={`relative text-center flex-col border corder-grey-300 ${(eventBg !== ""&& eventCtx)?`bg-[${eventBg}] text-white`:''}`}>
        {weekIdx==0&&<div>
            {day.format('ddd')}
        </div>}
        <div className={`absolute  top-[50%]  translate-x-[-50%] left-[50%] h-full flex-1 my-auto ${day.format("YYYY MMM DD")==dayjs().format("YYYY MMM DD")?'translate-y-[-20%]':'translate-y-[-10%]'}`}>
            <div className={`${day.format("YYYY MMM DD")==dayjs().format("YYYY MMM DD")?'bg-blue-500 rounded-full w-[50px] h-[50px] text-white':''} flex justify-center items-center`}>
                 {day.format('DD')}
            </div>
        </div>
    </div>
  )
}

export default Day