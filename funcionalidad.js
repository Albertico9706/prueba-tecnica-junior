import {get_spacexdata} from "./lib/api.js"
import * as schemas from "./lib/schemas.js"
import { create_elements } from "./lib/util.js"

const DEVPATH="/gitproyects/soluciones_lab/prueba-tecnica-junior/"
const DEV=window.location.pathname.includes(DEVPATH)
await populate_board("lanpad")

async function populate_board(classname){
  const LOCATIONS={
    INDEX:DEV? DEVPATH:"/prueba-tecnica-junior/"
  }
  console.log(window.location.pathname)
  const pathname_length=DEV ?4:2
  const pathname=window.location.pathname===LOCATIONS.INDEX? "lanpads":window.location.pathname.split("/").at(pathname_length)
  console.log(pathname)
  const data=await get_spacexdata(pathname)
  const schema=schemas[pathname]
  data.map((d)=>{
      const elements=create_elements(d,schema)
      const pieze=document.createElement("div");
      pieze.classList.add(classname)

      for (let el of elements){
        pieze.append(el)}

      document.querySelector(".board").appendChild(pieze);
  })


}

