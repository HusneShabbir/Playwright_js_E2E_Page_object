class products{


    constructor(page){
        //this.page = page
        this.cart_body = page.locator('.inventory_item_description');
        this.cart = page.locator('.inventory_item_name ')
        this.cart_icon = page.locator('.shopping_cart_link')
        
    }
    async products_finalize(final_prod){
        const arr  = await this.cart.allTextContents();
        console.log(arr);
        const cart_len = await this.cart_body.count();
        for(let i=0; i<cart_len ; i=i+1){
            if(await this.cart_body.nth(i).locator('.inventory_item_name ').textContent() == final_prod){
                await this.cart_body.nth(i).locator('text = Add to cart').click();
                break;
            }
        }
        
    }
    async prod_cart_page(){
        await this.cart_icon.click();
    }
}

module.exports = {products};