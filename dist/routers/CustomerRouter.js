"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerController_1 = require("../controllers/CustomerController");
const router = (0, express_1.Router)();
router.get("/get", CustomerController_1.getAllCustomers);
router.post("/save", CustomerController_1.createCustomer);
exports.default = router;
