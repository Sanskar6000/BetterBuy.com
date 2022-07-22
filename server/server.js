const express = require('express');
const data = require('./data/data.js');
const app = express();

var cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/product/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
