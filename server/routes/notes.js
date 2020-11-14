require('../data/database');
const express = require('express');
const router = express.Router();
const noteModel=require('../Models/note')

/* GET users listing. */
router.get('/', (req, res) => {
  noteModel.find({}, (err, data) => {
    if (err) {
      res.send('hi')
    }
    else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {
  const note = new noteModel(req.body).save().then(() => console.log(`${req.body.id} Saved`));

})
router.put('/:id' , (req,res) => {
  console.log(req.body);
  noteModel.findOneAndUpdate({id: req.body.id},  {$set: { title: req.body.title, content:req.body.content}}, (err,doc) => {
      err? console.log(err) : res.send(doc);
  });
})
router.delete('/:id', (req,res)=>{
  console.log(req.params);
  noteModel.findOneAndDelete({id: req.params.id},(err)=>{
      err?res.send(err):res.status(200).send()
  }

  )
})



module.exports = router;
