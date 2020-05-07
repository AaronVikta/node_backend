const router = require('express').Router();
const verify = require('../verifyToken');
const  Joi = require('@hapi/joi')
const jsonpatch = require('fast-json-patch');


let document = {
  firstName: "Albert",
  lastName: "Aryan"
  };



router.get('/',verify, (req, res)=>{
  res.json(document)
})



router.patch('/update', verify, (req, res)=>{
  let patch = [
    { op: req.body.op, path: req.body.path, value: req.body.value },
  ];
document = jsonpatch.applyPatch(document, patch).newDocument;

  // let patcheddoc = jsonpatch.apply_patch(original_doc, thepatch);
  res.send(document)
})

module.exports = router
