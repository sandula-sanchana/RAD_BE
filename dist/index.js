"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const CustomerRouter_1 = __importDefault(require("./routers/CustomerRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//app.use(cors())
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.use("/api/v1/customers", CustomerRouter_1.default);
mongoose_1.default.connect("mongodb://localhost:27017/first_cus_db").then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err);
});
app.listen(5000, () => {
    console.log(`Express server started `);
});
