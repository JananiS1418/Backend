import fs from 'fs'

fs.writeFile("create.txt","This is the new file",(err)=>{

    if(err){
        console.log("File doesnot create");
        return
        
    }
    console.log("File created successfully");
    

})


   fs.readFile("create.txt","utf-8",(err,data)=>{
    if(err){
        console.log("File doesnot read");
        return
        
    }

    console.log(data);
    

   })

   fs.appendFile("create.txt","/New File added",(err)=>{

    if(err){
        console.log("File doesnot updated");
        return
    }

    console.log("File updated successfully");
    

   })


   fs.unlink("create.txt",(err)=>{
     if(err){
        console.log("File doesnot delete");
        return
        
     }
     console.log("File deleted successfully");
     
   })