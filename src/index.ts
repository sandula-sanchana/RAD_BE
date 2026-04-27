import express from "express";
import mongoose from "mongoose"

import CustomerRouter from "./routers/CustomerRouter";


const app = express();

app.use(express.json())
//app.use(cors())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use("/api/v1/customers",CustomerRouter)




mongoose.connect("mongodb://localhost:27017/first_cus_db").then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err)
})


app.listen(5000,()=>{
    console.log(`Express server started `);
})