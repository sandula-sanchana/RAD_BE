import {customerModel} from "../models/CustomerModel";
import {Request,Response} from "express";

export const getAllCustomers=async  (req:Request,res:Response)=>{
    try{
        const customers = await customerModel.find()
        res.status(200).json({message:"success",success:customers})
    }catch(err){
        res.status(500).json({message:"Something went wrong"})
        console.log(err)
    }
}

export const createCustomer=async(req:Request,res:Response)=>{
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
}