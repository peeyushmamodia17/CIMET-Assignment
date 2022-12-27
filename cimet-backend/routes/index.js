const express=require('express');

const router = express.Router();
const ElectricityController = require("../controller/Electricity/electricity.controller");
router.post('/api/plan-list',ElectricityController.generateToken);

module.exports=router;