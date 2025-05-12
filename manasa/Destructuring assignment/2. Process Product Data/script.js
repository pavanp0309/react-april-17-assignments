function ProductDetails(p){
 const {name, price=50000}=  p;
 console.log(name);
 console.log(price)
}

const product= {name: "Laptop"}
ProductDetails(product)