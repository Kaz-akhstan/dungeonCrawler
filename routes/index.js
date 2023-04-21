const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index.njk')
});

router.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});