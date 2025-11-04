import dotenv from  "dotenv"
import express from "express"
const app = express()
import router from "./router/auth.js"
import path from "path"
dotenv.config()

app.use(express.json())

app.use("/chat/api",router)

const __dirname = path.resolve()
console.log(__dirname)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
    })
}

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on the port:${process.env.PORT}`)
})