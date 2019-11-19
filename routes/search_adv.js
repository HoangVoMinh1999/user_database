var express = require('express');
var router = express.Router();
var Product=require('../models/product');
var mongo=require('mongodb');
var assert=require('assert');


var url='mongodb://localhost:27017/products';




/* GET home page. */
router.get('/',function(req,res,next){
  var resultArray=[];
  mongoose.connect(url,function(err,db){
    assert.equal(null,err);
    var cursor = db.collection('products').find();
    cursor.forEach(function(docs,err){
      assert.equal(null,err);
      resultArray.push(docs);
    },function(){
      db.close();
      res.render('/search_adv',{items : resultArray});
    });
  });
})


module.exports = router;