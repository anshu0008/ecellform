const mongoose = require("mongoose");
const formModel = require("../Model/model");

const formData_add = async (req, res) => {
  let { name, email, registrationNumber, whatsappNumber, domain, branch } =
    req.body;
    console.log(req.body);
  try {
    console.log(domain);
    console.log(registrationNumber);
    whatsappNumber=parseInt(whatsappNumber);
    console.log(registrationNumber);
    const details = await formModel.create({
      name,
      email,
      registrationNumber,
      whatsappNumber,
      domain,
      branch,
    });
    res.status(200).json(details);
  } catch (error) {
    console.error('failed',error)
    res.status(404).json({ error: error });
  }
};
const fromData_get = async (req, res) => {
    const details=await formModel.find({}).sort({createdAt:-1});
    res.status(200).json(details);
};

module.exports = {
  formData_add,
  fromData_get,
};
