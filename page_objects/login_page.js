class login_page{

    constructor(page){
        this.page = page;
        this.user_email = page.locator('[placeholder="Username"]');
        this.user_pass = page.locator('[placeholder="Password"]');
        this.signin = page.locator('#login-button');
    }
    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login_method(username,password){
        await this.user_email.fill(username);
        await this.user_pass.fill(password);
        await this.signin.click();
    }
}
module.exports = {login_page};