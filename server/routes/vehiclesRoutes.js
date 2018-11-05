const express = require('express');
const router = express.Router();

const {
    list,
    show,
    create,
    update,
    remove
} = require("../controllers/vehiclesController");


router.get("/vechicles", list);
router.get("/vechicles/:id", show);
router.post("/vechicles", create);
router.put("/vechicles/:id", update);
router.delete("/vechicles/:id", remove);


module.exports = router;
