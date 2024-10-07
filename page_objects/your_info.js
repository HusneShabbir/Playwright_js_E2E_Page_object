class your_info{

    constructor(page){
        this.firstname = page.getByPlaceholder('First Name');
        this.lastname  = page.getByPlaceholder('Last Name');
        this.pincode = page.getByPlaceholder('Zip/Postal Code');
        this.singup = page.getByRole('button',{name:'continue'})

    }
    async info_fill(firstName, LastName,Pin){
        await this.firstname.fill(firstName);
        await this.lastname.fill(LastName);
        await this.pincode.fill(Pin);

    }
    async continue(){
        await this.singup.click()

    }
}

module.exports = {your_info}