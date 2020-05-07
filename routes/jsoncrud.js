const router = require('express').Router();
const verify = require('../verifyToken');

router.get('/',verify, (req, res)=>{
  res.json({
    post:{
      title:"My Post",
      description:"Some Secret Info"
    }
  })
})

module.exports = router
