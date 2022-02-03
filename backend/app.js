const express = require('express');
const mongoose = require('mongoose');
const app  = express();
const port =  8000;
// const port = process.env.PORT || 8000;
var router = express.Router();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/marketPlace")
.then(()=>{
    console.log("server Connected");
}).catch((err)=>{
    console.log(err);
})

const markertplaceSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    email : {
        type: String,
        required: true,
        trim: true,
    }
});

const productDetail = new mongoose.Schema({
    adminname : {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    categoryid : {
        type: Number,
        required: true,
        trim: true,
    },
    highlight : [{
        type: String,
        required: true,
        trim: true,
    }],
    image : {
        type: String,
        required: true,
        trim: true,
    },
    overview : {
        type: String,
        required: true,
        trim: true,
    },

    sharelink : {
        type: String,
        required: true,
        trim: true,
    },
    subcategory : {
        type: Number,
        required: true,
        trim: true,
    },
    title : {
        type: String,
        required: true,
        trim: true,
    },
    tools : {
        type: Number,
        required: true,
        trim: true,
    },
});


let marketColl = mongoose.model("user",markertplaceSchema)
let productDetailColl = mongoose.model("productDetail",productDetail)

router.route('/user')
.get((req,res)=>{
    marketColl.find().then((data)=>{
        res.send(`${data}`);
    }).catch((err)=>{
        res.send(err);
    })
})
.post((req,res)=>{
    marketColl.create(req.body).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err);
    })
});

// 
router.route('/product')
.get((req,res)=>{
    productDetailColl.find().then((data)=>{
        res.send(`${data}`);
    }).catch((err)=>{
        res.send(err);
    })
})
.post((req,res)=>{
    productDetailColl.create(req.body).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err);
    })
});

app.use(router);

app.listen(port,()=>{
    console.log(`port set on ${port}`)
})