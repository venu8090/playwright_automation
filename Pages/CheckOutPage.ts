//checkout page
import { Locator, Page, test } from "@playwright/test";
 
export class CheckoutPage {
    readonly page: Page;
    readonly cartIcon: Locator;
    readonly checkoutButton: Locator;
    readonly fname: Locator;
    readonly lname: Locator;
    readonly zip: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;
 
    constructor(page: Page){
        this.page=page;
        this.cartIcon= page.locator('.shopping_cart_link');
        this.checkoutButton= page.getByRole('button',{name:'checkout'});
        this.fname=page.locator('#first-name');
        this.lname=page.locator('#last-name');
        this.zip=page.locator('#postal-code');
        this.continueButton=page.locator('#continue');
        this.finishButton=page.getByRole("button", {name:'Finish'});
        this.cancelButton= page.locator('#cancel');
    }
 
async goToShoppingCart(){
    await this.cartIcon.click();
}
 
async clickCheckout() {
        await this.checkoutButton.click();
}
 
async addUserInfo(firstName:string,lastName:string,zipCode:string ){
    await this.fname.fill(firstName);
    await this.lname.fill(lastName);
    await this.zip.fill(zipCode);
    await this.continueButton.click();
}
 
async checkoutOverview(){
    await this.finishButton.click();
 
}
 
async checkoutOverviewCancel(){
    await this.cancelButton.click();
}
 
}