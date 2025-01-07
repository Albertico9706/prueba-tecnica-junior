const lanpads={
  head:{keys:["name","status"],tags:["p", "span"]},
  body:{keys:["full_name","images"],tags:["p","img"]},
  foot:{keys:["region","locality"],tags:["p","p"]}
}

const payloads={
  head:{keys:["name","reused"],tags:["p","p"]},
  body:{keys:["type","reference_system"],tags:["p","p"]},
  foot:{keys:["mass_kg"],tags:["p"]},
}


const rockets={
    head:{keys:["name","type"],tags:["p","p"]},
    body:{keys:["description","wikipedia"],tags:["p","a"]},
    foot:{keys:["country","company"],tags:["p","p"]},
  }

const crew={
    head:{keys:["name","status"],tags:["p","p"]},
    body:{keys:["agency","image"],tags:["p","img"]},
    foot:{keys:["launches","wikipedia"],tags:["p","a"]},
  }

const launches={
  head:{keys:["name","success"],tags:["p","p"]},
  body:{keys:["links","details"],tags:["img","p"]},
  foot:{keys:["flight_number","crew"],tags:["p","a"]},
}
  


export{lanpads,crew,rockets,launches,payloads}