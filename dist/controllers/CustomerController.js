"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = exports.getAllCustomers = void 0;
const CustomerModel_1 = require("../models/CustomerModel");
const getAllCustomers = async (req, res) => {
    try {
        const customers = await CustomerModel_1.customerModel.find();
        res.status(200).json({ message: "success", success: customers });
    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(err);
    }
};
exports.getAllCustomers = getAllCustomers;
const createCustomer = async (req, res) => {
    try {
        const data = req.body;
        const cus = new CustomerModel_1.customerModel({
            id: Date.now(),
            ...data,
        });
        const savedCustomer = await cus.save();
        res.status(200).json({ message: "success", success: savedCustomer });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.createCustomer = createCustomer;
