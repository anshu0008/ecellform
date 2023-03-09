const express=require("express");
const router=express.Router();
const {
    fromData_get,
    formData_add
}=require("../Controller/controller")

router.get("/api/form",fromData_get);
router.post("/api/form",formData_add);

module.exports=router;