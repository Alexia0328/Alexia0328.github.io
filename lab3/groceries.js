// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		img: "./img/broccoli.jpeg",
		vegetarian: true,
		glutenFree: true,
		vegetarianANDglutenFree: true,
		organicproducts: true,
		price: 1.99
	},
	{
		name: "bread",
		img:"./img/bread.jpeg",
		vegetarian: true,
		glutenFree: false,
		vegetarianANDglutenFree: false,
		organicproducts: false,
		price: 2.35
	},
	{
		name: "salmon",
		img:"./img/salmon.jpg",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: true,
		price: 10.00
	},
	{
		name: "rice",
		img:"./img/rice.jpg",
		vegetarian: true,
		glutenFree: false,
		vegetarianANDglutenFree: false,
		organicproducts: true,
		price: 2.00
	},
	{
		name: "tomato",
		img:"./img/tomato.jpg",
		vegetarian: true,
		glutenFree: true,
		vegetarianANDglutenFree: true,
		organicproducts: true,
		price: 1.30
	},
	{
		name: "chicken breast",
		img:"./img/chickenbreast.jpg",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: false,
		price: 15.00
	},
	{
		name: "beef",
		img:"./img/beef.jpg",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: true,
		price: 22.22
	},
	{
		name: "milk",
		img:"./img/milk.jpg",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: true,
		price: 4.00
	},
	{
		name: "egg",
		img:"./img/egg.jpeg",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: false,
		price: 2.50
	},
	{
		name: "spaghetti",
		img:"./img/spaghetti.jpg",
		vegetarian: true,
		glutenFree: false,
		vegetarianANDglutenFree: false,
		organicproducts: false,
		price: 1.50
	}
];

//var organicproductIcon = "https://cdn2.iconfinder.com/data/icons/eco-food-and-cosmetic-labels-2/128/Artboard_55-512.png";
//var organic = false;



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].vegetarianANDglutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "OrganicProducts") && (prods[i].organicproducts == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListProductsPrice(prods, restriction) {
	let product_price = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].vegetarianANDglutenFree == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "OrganicProducts") && (prods[i].organicproducts == true)){
			product_price.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_price.push(prods[i].price);
		}
	}
	return product_price;
}

function restrictListProductsImg(prods, restriction) {
	let product_img = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_img.push(prods[i].img);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_img.push(prods[i].img);
		}
		else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].vegetarianANDglutenFree == true)){
			product_img.push(prods[i].img);
		}
		else if ((restriction == "OrganicProducts") && (prods[i].organicproducts == true)){
			product_img.push(prods[i].img);
		}
		else if (restriction == "None"){
			product_img.push(prods[i].img);
		}
	}
	return product_img;
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0.0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
