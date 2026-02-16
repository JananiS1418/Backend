export const createdata = (req,res)=>{

    const {name} =req.body

    if(name === "Janu" ){
        res.status(200).send("Yes My name is Janu")
    }else{
        res.status(404).send("NO")
    }
    
    
}

export const getdata = (req,res)=>{
 
    //   console.log(req.params);

    const {userid} = req.params

    const data= [{id:1,name:"Janani",age:22},{id:2,name:"Monish",age:20}]

    if(userid==  1 ){
        console.log(data);

        res.status(200).json({
            success:true,
            message:"Data is correct",
            userdata:data
        })

        
    }else{
        res.status(404).json({
            message:"No the data is wrong"
        })
    }
      


}