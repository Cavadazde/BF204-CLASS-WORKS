const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const port = 3000

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL;



app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));




mongoose

    .connect(DB)
    .then(() => {
        console.log("connected to db succesfully");
        app.listen(PORT, () => {
            console.log(`Example app listening on port: http://localhost:${PORT}`)
        });
    })
    .catch((err) => {
        console.log(err)
    });

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
);

const Products = mongoose.model("Products", productSchema);


// get all products 

app.get("/products", async (req, res) => {
    try {
        const products = await Products.find({});

        if (products.length > 0) {
            res.status(200).send({ message: "succes", data: products });
        } else {
            res.status(204).send({ message: "data is empty" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message });

    }
})

// get product id

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Products.findById(id);
        if (product) {
            res.status(200).send({ message: "success", data: product })
        } else {
            res.status(204).send({ message: "data is empty!" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
})

// delete product
app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Products.findByIdAndDelete(id);
        const products = await Products.find({});
        res.status(200).send({
            message: "succes",
            deletedProduct: deletedProduct,
            allProducts: products
        });

    } catch (error) {
        res.status(500).send({ message: error.message })

    }
});


// post product

app.post("/products", async (req, res) => {
    const newProduct = new Products({ ...req.body });
    try {
        await newProduct.save();
        res.status(201).send({
            message: "created succesfuly",
            data: newProduct
        });
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
})


//patch product
app.patch("/products/:id",async(req,res)=>{
    const{id}=req.params;
    try {
        await Products.findByIdAndUpdate(id,{...req.body});
        const updatedProduct=await Products.findById(id);
        res.status(200).send({
            message:"updated succesfully",
            data:updatedProduct
        })

    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
});