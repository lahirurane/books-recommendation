const express = require('express');
const router = express.Router();

// Load User model
const Purchase = require('../../models/Purchase');

// @route   GET api/users/purchase
// @desc    Save user purchase
// @access  Public
router.get('/purchase/:user/:id', (req, res) => {
const id = req.params.id;
const user = req.params.user;

purchase = new Purchase({
  data_id:id,
  user_id:user
})
purchase.save().then(data =>{
res.status(200).json({ msg: 'Users Works' })
}).catch(e =>{
  res.status(400).json({ msg: 'Error in saving' })
})
  
});


// @route   GET api/users/getpurchase
// @desc    get user purchase
// @access  Public
router.get('/getpurchase/:user/', (req, res) => {

const user = req.params.user;

Purchase.find({user_id:user}).populate('data_id').then(data => {
  result = []
  data.map(item=>{
    result.push(item.data_id)
  })
  res.status(200).json({isSuccess:true,data:result})
}).catch(e =>{
  console.log("error in getting user purchases",e)
  res.status(400).json({isSuccess:false})
})
  
});



module.exports = router;
