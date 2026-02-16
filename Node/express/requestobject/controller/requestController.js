export const adddata = (req)=>{

    console.log(req.body);
    
}

export const getdataparams =  (req)=>{

    console.log(req.params);
    
}

export const getdataquery = (req)=>{
    console.log(req.query);
    
}

export const getdataheaders = (req)=>{

    console.log(req.headers.jwttoken);
    
}