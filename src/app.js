class Product {
    constructor(productName,unitPrice,quantity){
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.quantity = quantity;

    }
}

let newProduct = new Product("telefon",5000,2)
console.log(newProduct)
