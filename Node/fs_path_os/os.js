import  os from 'os'

const platform  =  os.platform()
console.log(platform);


const architecture = os.arch()
console.log(architecture);


const totalmemory = os.totalmem()
console.log(totalmemory);

const userinfo = os.userInfo()
console.log(userinfo);

