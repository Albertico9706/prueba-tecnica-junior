/* import data from "./spacex_data.js"
 */


const fecthpayloads=async()=>{
    setTimeout(()=>{},2000)
    return payloads
}




const get_launches_spacex=async()=>{
    const launches=payloads.filter((payload)=>{return payload.manufacturers.includes("SpaceX")}) 
    return launches
}

const get_launches=async()=>{
    return launches
}

/**
 * 
 * @param {keyof data} pathname - Ruta de datos de la api 
 */
const get_spacexdata=async(pathname,DEV)=>{
    if(!DEV){
    const response=await fetch(` https://api.spacexdata.com/v4/${pathname}`)
    const data=await response.json()
    return data.slice(0,20)}
    else {
        return(data[pathname])
    }
}

const get_mockup_lanpads=async()=>{
    return lanpads
}

const get_rockets=async()=>{
    return rockets
}

const get_crew=async()=>{
    return crew
}

export{get_crew,get_rockets, get_mockup_lanpads,get_launches,get_spacexdata}

