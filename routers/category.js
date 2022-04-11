const express = require('express');
const router = express.Router();
const data = require('../masterJson')

router.get('/', async(req,res) => {

    const CategoryObject = {
        "categories": [
            "Housing",
            "Pension",
            "Disability",
            "Transgender",
            "Women & Children",
            "Health",
            "Unorganised Labour",
            "Students",
            "Skill Development",
            "BPL Card Holder",
            "Other"
        ]
    }
    console.log("Request Recieved")
    res.status(201).send(CategoryObject)
})

module.exports = router