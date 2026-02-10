import http from 'http'

const app = http.createServer()

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Server is in the http://localhost:${PORT}`);
    
})