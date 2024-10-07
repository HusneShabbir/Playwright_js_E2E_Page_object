const { test, expect } = require('@playwright/test');
const {Pomanager} = require('../page_objects/Pomanager')

test('cart', async ({ page }) => {
    const final_prod = 'Test.allTheThings() T-Shirt (Red)'
    const user = 'standard_user'
    const pass = 'secret_sauce'
    const poManeger = new Pomanager(page);

    const Login_page = poManeger.getLogin_page();
    await Login_page.navigate();
    await Login_page.login_method(user,pass);
    const Products = poManeger.getProducts();
    await Products.products_finalize(final_prod);
    //prod_cart_page
    await Products.prod_cart_page();
    const Cart_page = poManeger.get_Cart_page();
    await Cart_page.cart_check_checkout(final_prod)

    const Your_info = poManeger.get_Your_info();
    await Your_info.info_fill('apple', 'banana' , '0007');
    await Your_info.continue();

    const Overview = poManeger.get_Overview();
    await Overview.overview_assertions(final_prod);
    await Overview.finish();
    await expect(page).toHaveURL(/.*checkout-complete/);

});