require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { getProducts, postProduct, editProduct, deleteProduct } = require('./controller/getProducts');
const PORT = 7000;

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
	app.set('db', dbInstance);
	console.log('db connected');
});

app.use(express.json());

app.get('/api/inventory', getProducts);
app.post('/api/inventory', postProduct);
app.put('/api/inventory/:id', editProduct);
app.delete('/api/inventory/:id', deleteProduct);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
