
const {login_page} = require('../page_objects/login_page');
const {products} = require('../page_objects/products');
const {cart_page} = require('../page_objects/cart_page');
const {your_info} = require('../page_objects/your_info');
const {overview} = require('../page_objects/overview');

class Pomanager{
    constructor(page){
        this.page = page;
        this.Login_page = new login_page(this.page);
        this.Products = new products(this.page);
        this.Cart_page = new cart_page(this.page);
        this.Your_info = new your_info(this.page);
        this.Overview = new overview(this.page);
    }
    getLogin_page(){
        return this.Login_page;
    }
    getProducts(){
        return this.Products;
    }
    get_Cart_page(){
        return this.Cart_page;
    }
    get_Your_info(){
        return this.Your_info;
    }
    get_Overview(){
        return this.Overview;
    }


}

module.exports = {Pomanager}