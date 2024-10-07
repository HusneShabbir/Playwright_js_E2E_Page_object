class cart_page{

    constructor(page){
        this.checkout = page.locator('#checkout')
        this.cart_items = page.locator('.cart_item');
        this.checkout = page.locator('#checkout');
        this.item_price = page.locator('.inventory_item_price')
    }
    async cart_check_checkout(final_prod){
        const cart_count = await this.cart_items.count();
        for(let x=0; x<cart_count;x++){
            if(await this.cart_items.nth(x).locator('.inventory_item_name').textContent() == final_prod){
                const cost = await this.item_price.textContent();
                console.log('cost of '+final_prod+ ' is ' +cost);
            }
            else{
                await this.cart_items.nth(x).locator('text=Remove').click()
            }
            await this.checkout.click();
        }
    }
    
}

module.exports = {cart_page};