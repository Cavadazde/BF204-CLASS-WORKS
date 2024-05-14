const express = require('express')
const app = express()
const port = 3000
const products = require("./db.js")
const uuid = require("uuid")
const cors = require("cors");
const bodyParser = require('body-parser')




app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

console.log(products)

// get all product
app.get('/products', (req, res) => {
    if (products.length > 0) {
        res.status(200).send(products);
    } else {
        console.log("test")
    }
    res.send({ message: "data is empty!" }).status(204)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

// get product by id

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === id);

    if (product !== undefined) {
        res.status(200).send({
            data: product,
            error: null,
            message: "succes"
        });

    } else {
        res.send({ message: "not found" }).status(404)
    }
})

// delete product id 

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const idx = products.findIndex((x) => x.id == id);
    const deleted = products.find((x) => x.id == id);
    if (deleted) {
        products.splice(idx, 1);
        res.send({
            message: "deleted",
            data: deleted
        });

    } else {
        res.send({
            message: "not found",
            data: null
        })
    }
})


// post product

app.post("/products", (req, res) => {
    const { title, price, description, category, rating } = req.body;
    const newProduct = {
        id: uuid.v4(),
        title: title,
        description: description,
        price: price,
        category: category,
        rating: rating
    }
    products.push(newProduct);
    res.send({
        message: "succes",
        data: newProduct,
    });

})
app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const idx = products.findIndex((x) => x.id == id)

    if (idx == -1) {
        res.send({
            message: "not found",
            data: null,
        });

    } else {
        const updatedProduct = req.body;
        products.splice(idx, 1, updatedProduct);
        res.status(200).send({
            message: "succes",
            data: updatedProduct
        })
    }
});


// patch product

app.patch("/products/:id", (req, res) => {
    const { id } = req.params;
    const idx = products.findIndex((x) => x.id == id);

    if (idx == -1) {
        res.send({
            message: "not found",
            data: null,
        })
    } else {
        const updatedProduct = products.find((x) => x.id == id);
        const { title, price, description, category, rating } = req.body;
        if (title) {
            updatedProduct.title = title;
        }
        if (price) {
            updatedProduct.price = price
        }
        if(description){
            updatedProduct.description=description
        }
        if(category){
            updatedProduct.category=category
        }
        if(rating){
            updatedProduct.rating=rating
        }
        products.splice(idx,1,updatedProduct);
        res.send({
        message:"succes",
        data:updatedProduct
        })
    }
})