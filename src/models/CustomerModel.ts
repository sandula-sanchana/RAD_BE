import { model, Schema } from "mongoose"

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

export const  customerModel=model<Customer>("Customers",CustomerSchema)