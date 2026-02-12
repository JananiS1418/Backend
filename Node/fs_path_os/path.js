import path from 'path'

const foldername = "Server"
const filename = "server.js"

const filepath = path.join(foldername,filename)
console.log(filepath);


const absolute  =  path.resolve("server.js")
console.log(absolute);

const extension = path.extname("server.js")
console.log(extension);

