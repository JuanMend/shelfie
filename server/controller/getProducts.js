const getProducts = (req, res) => {
	let db = req.app.get('db');
	db.get_products().then((results) => {
		res.status(200).json(results);
	});
};

const postProduct = (req, res) => {
	req.app.get('db').post_products([ req.body.name, req.body.price, req.body.image_url ]).then((results) => {
		res.status(200).json(results);
	});
};

const editProduct = (req, res) => {
	req.app.get('db').edit_products([ req.params.id, req.body.image_url ]).then((results) => {
		res.status(200).json(results);
	});
};

const deleteProduct = (req, res) => {
	req.app.get('db').delete_products(req.params.id).then((results) => {
		res.status(200).json(results);
	});
};

module.exports = {
	getProducts,
	postProduct,
	editProduct,
	deleteProduct
};
