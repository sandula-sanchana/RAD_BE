import express from "express";
import mongoose, { model, Schema } from "mongoose"

mongoose.connect("mongodb://localhost:27017/first_cus_db").then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err)
})

const app = express();

app.use(express.json())
//app.use(cors())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

interface Customer{
    id: number
    name: string
    email: string
    address?: string
}

const CustomerSchema = new Schema<Customer>({
    id:{type:Number, required:true, unique:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
    address:{type:String}
})

const  customerModel=model<Customer>("Customers",CustomerSchema)

app.post("/api/v1/customers/save",async (req,res)=>{

    try {
        const data = req.body
        const cus=new customerModel({
            id:Date.now(),
            ...data,

        })

        const savedCustomer=await cus.save()

        res.status(200).json({message:"success",success:savedCustomer})

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong"})
    }

})

app.get("/api/v1/customers/get",async (req,res)=>{

    try{
        const customers = await customerModel.find()
        res.status(200).json({message:"success",success:customers})
    }catch(err){
        res.status(500).json({message:"Something went wrong"})
        console.log(err)
    }

})

app.listen(5000,()=>{
    console.log(`Express server started `);
})