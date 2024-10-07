class overview{
    constructor(page){
        this.carts_list = page.locator('.cart_item .cart_item_label a');
        this.finish_btn = page.getByRole('button',{name:'Finish'});

    }
    async overview_assertions(final_prod){
        await this.carts_list.filter({hasText:final_prod}).isVisible();
        
    }
    async finish(){
        await this.finish_btn.click();

    }
}

module.exports = {overview}