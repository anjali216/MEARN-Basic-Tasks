


//1 importing express
const express = require("express")

//2 creating an app in backend using express
const app =express()

// Middleware to parse JSON bodies
app.use(express.json())


//Getting data
let products = [
    {
        "id": 1,
        "name": "Table",
        "price": "$270"
    },
    {
        "id": 2,
        "name": "Steel Plate",
        "price" : "$200"
    },
    {
        "id": 3,
        "name": "Soap",
        "price": "$50"
    },
    {
        "id": 4,
        "name": "Washing Powder",
        "price": "$60"
    },
    {
        "id": 5,
        "name": "Bangles",
        "price": "$30"
    }
]

//5 api call for getting data from the server
app.get('/',(req,res)=>{
    res.send(" Customer Products")
})

// READ all products (GET /api/products)
app.get('/api/products', (req, res) => {
    res.status(200).json(products)
})


// CREATE a new product (POST /api/products)
app.post('/api/products', (req, res) => {
    const { id, name, price } = req.body;
    if (!id || !name || !price) {
        return res.status(400).json({ message: "Invalid product data" });
    }
    const productExists = products.find(product => product.id === id);
    if (productExists) {
        return res.status(400).json({ message: "Product with the same ID already exists" });
    }
    const newProduct = { id, name, price };
    products.push(newProduct);
    res.status(201).json({ message: "Product created", product: newProduct });
});


//Get a specific product by id
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
});

// UPDATE a product by ID (PUT /api/products/:id) http://localhost:3000/api/products/1
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;
    const product = products.find(product => product.id === productId);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    if (name) product.name = name;
    if (price) product.price = price;
    res.status(200).json({ message: "Product updated", product });
});

//delete a post from the array
app.delete('/api/products/:id',(req,res)=>{
    const pid = parseInt(req.params.id)
    const product =products.find((p)=>p.id === pid)
    if(!product){
        res.status(404).send("No product found")
    }
    else{
        products=products.filter((p)=>p.id !== pid)
        res.status(200).json(products)
    }
})


//3 port creation
const PORT =3000

//4 create listen
app.listen(PORT,()=>{
console.log("listening on port" +PORT);
    
})