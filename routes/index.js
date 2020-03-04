const express = require("express")
const router = express.Router()
const Posting = require("../models/posting")

/* GET main page. */
router.get("/", function(req, res, next) {
  // res.sendFile(path.join(__dirname, '../public', 'index.html'))
  // Posting.find()
  //   .sort({ createdAt: -1 })
  //   .exec(function(err, postings) {
  //     res.send(postings)
  //   })
})

module.exports = router
