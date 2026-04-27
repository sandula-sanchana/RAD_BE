import {Router} from "express";
import {getAllCustomers,createCustomer} from "../controllers/CustomerController"

const router=Router();


router.get("/get",getAllCustomers);
router.post("/save",createCustomer);


export default router;