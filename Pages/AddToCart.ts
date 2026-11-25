import {Page,Locator} from '@playwright/test';
 
 
export class AddToCart {
 
 readonly Addproduct:Locator;
 
 constructor(page:Page){
    this.Addproduct=page.locator('#add-to-cart-sauce-labs-backpack');
 }
 
 async AddProductToCart(){
        await this.Addproduct.click();
 }
 
}
 