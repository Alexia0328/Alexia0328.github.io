// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		vegetarianANDglutenFree: true,
		organicproducts: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		vegetarianANDglutenFree: false,
		organicproducts: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: true,
		price: 10.00
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: false,
		vegetarianANDglutenFree: false,
		organicproducts: true,
		price: 2.00
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		vegetarianANDglutenFree: true,
		organicproducts: true,
		price: 1.30
	},
	{
		name: "chicken breast",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: false,
		price: 15.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		vegetarianANDglutenFree: false,
		organicproducts: true,
		price: 22.22
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		vegetarianANDglutenFree: true,
		organicproducts: true,
		price: 1.30
	},
	{
		name: "potato",
		vegetarian: true,
		glutenFree: true,
		vegetarianANDglutenFree: true,
		organicproducts: false,
		price: 2.50
	},
	{
		name: "spaghetti",
		vegetarian: true,
		glutenFree: false,
		vegetarianANDglutenFree: false,
		organicproducts: false,
		price: 1.50
	}
];

window.onload = function (){  

    var bigImg = document.createElement("img");     //创建一个img元素

    bigImg.src="http://www.baidu.com/img/baidu_sylogo1.gif";   //给img元素的src属性赋值

    //bigImg.width="320";  //320个像素 不用加px

    var myp = document.getElementById('myp'); //获得dom对象

    myp.appendChild(bigImg);    //为dom添加子元素img

};


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
