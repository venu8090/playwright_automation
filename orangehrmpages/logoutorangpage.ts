import {Page, Locator } from "@playwright/test";
 
 
export class logoutorangepage
 
{
 
readonly menu:Locator;
readonly logoutBtn:Locator;
 
constructor(page:Page){
    this.menu=page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']");
    this.logoutBtn=page.getByText("Logout");
}
 
async logoutFromApplication(){
    await this.menu.click();
    await this.logoutBtn.click();
}
 
}