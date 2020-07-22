//exectime: 2020-07-22T00:02:42.389Z, -> yyyy-mm-dd hh:mm:ss
function convertJSONToDateString(dateString,isUTC){
    let times = dateString.split(',')
    let stimes = []
    times = times[2].substring(13,32)
    times = times.split('T')
    if(isUTC){
        stimes = times[1].split(':')
        stimes[0] = parseInt(stimes[0])+8
        if(stimes[0]>23) { //判断小时进位
            stimes[0] -= 24;
            let sdates = times[0].split('-')
            sdates[2] = parseInt(sdates[2]) + 1
            return sdates[0]+'-'+sdates[1]+'-'+sdates[2]+' '+stimes[0]+':'+stimes[1]+':'+stimes[2]
        }
        return times[0]+' '+stimes[0]+':'+stimes[1]+':'+stimes[2]
    }
    else{
        return times[0]+' '+times[1]
    }
}

//解析时间list [2020-07-22T00:02:42.389Z, ...] -> [yyyy-mm-dd hh:mm:ss, ...]
function parseUTCTimeList(dates){
    let newdates = []
    for(let i = 0; i < dates.length; i++){
        newdates[i] = convertJSONToDateString(dates[i].toString(),true)
    }
    let json = []
    for(let i = 0; i < newdates.length; i++){
        let j = {}
        j.exectime = newdates[i]
        json.push(j)
    }
    return json
}

//时间转换 string转date yyyy-mm-dd hh:mm:ss
function convertDateFromString(dateString) { 
    if (dateString) { 
    let arr1 = dateString.split(" ")
    let sdate = arr1[0].split('-')
    let stime = arr1[1].split(':')
    let date = new Date(sdate[0], sdate[1]-1, sdate[2], stime[0], stime[1], stime[2])
    return date
    }
}

module.exports = {
    convertJSONToDateString: convertJSONToDateString,
    parseUTCTimeList: parseUTCTimeList,
    convertDateFromString: convertDateFromString
}