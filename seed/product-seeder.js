var Product=require('../models/product');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath:"",
        id:"#01",
        name:"Adidas01",
        producer:"Adidas",
        type:"Shoes",
        price:3000000,
        detail:"dark blue, have S,M,L size"
    }),
    new Product({
        imagePath:"",
        id:"#02",
        name:"Adidas02",
        producer:"Adidas",
        type:"T-Shirt",
        price:500000,
        detail:"pink, have S,M,L size, thick"
    }),
    new Product({
        imagePath:"",
        id:"#03",
        name:"viettien01",
        producer:"Việt Tiến",
        type:"Shirt",
        price:343000,
        detail:"long arm,white"
    }),
    new Product({
        imagePath:"",
        id:"#04",
        name:"Nike01",
        producer:"Nike",
        type:"Shirt",
        price:3750000,
        detail:"black red, short arm"
    }),
];
var done=0;
for (var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}