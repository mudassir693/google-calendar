import day from 'dayjs'
export const getMonth = (month=day().month())=>{
    let year = day().year()
    let firstdayOfMonth = day(new Date(year, month, 1)).day()
    let dayFromSun = 0 - firstdayOfMonth

    let rtnMonth = new Array(5).fill([]).map(each=>{
        return new Array(7).fill([]).map(eachDay=>{
            dayFromSun++
            return day(new Date(year, month, dayFromSun))
        })
    })

    return rtnMonth

}