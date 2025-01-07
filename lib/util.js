const SETTINGS={
    DEV:false,
    ENTRAR:true,
    KEYVALUE:true,
  }

/**
 * 
 * @typedef {{
 *  keys:string[],
 *  tags:string[]}
 * } Schema
 */


/**
 * @typedef {T} ApiObj
 */

/**
 * @typedef {{[K in keyof T]: Node}} ApiObjNodes
 */

/**
 * @param { T} obj 
 * @param {Schema} schema 
* @returns {{[K in keyof T]: Node}}
*/
export function create_elements(obj,schema,aditional_els=undefined){

const elements=object_fragment_schema(schema)

for (let k in elements){
  const key=k.toUpperCase()
  const keyvalue=SETTINGS.KEYVALUE? `${key}: ${obj[k]}` :obj[k]
   elements[k].classList.add(k)
   if(k==="images"){
     elements[k].src=!SETTINGS.DEV? obj[k].large:""
   }else if(k==="launches"){
     elements[k].textContent=obj[k].length
   }else if(k==="wikipedia"){
    elements[k].href=obj[k]
    elements[k].textContent="Ver en wikipedia"
  }else if(k==="links"){
    elements[k].src=obj[k].patch.small
  }else{
     elements[k].textContent=keyvalue
   }
 }

const fragments=fragment_from_schema(schema,elements)

if(typeof aditional_els !== 'undefined') fragments.push(aditional_els())
const button=document.createElement("button");
button.classList.add("link_details")
button.textContent="Ver detalles";

SETTINGS.ENTRAR && fragments.push(button)

return fragments
}

function fragment_from_schema(schema,elements){
 const array=[]

 for (let k in schema){
   const current=schema[k].keys
   const result=document.createElement("div")
   result.classList.add(k)
   if(current.length){
     for (let v of current){
       result.append(elements[v])
     }
   }else result.append(elements[v])
   array.push(result)
 }

 return array
}


const object_fragment_schema=(schema)=>{
    const array=[]
    for (let k in schema){
      schema[k].keys.map((l,i)=>array.push([l,document.createElement(schema[k].tags[i])]))
  }
  return Object.fromEntries(array)
  }
