import {get_spacexdata} from "./lib/api.js"
import * as schemas from "./lib/schemas.js"
import { create_elements } from "./lib/util.js"


await populate_board("lanpad")

async function populate_board(classname){
  const LOCATIONS={
    INDEX:"/gitproyects/soluciones_lab/prueba-tecnica-junior/"
  }
  const pathname=window.location.pathname===LOCATIONS.INDEX? "lanpads":window.location.pathname.split("/").at(4)
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

