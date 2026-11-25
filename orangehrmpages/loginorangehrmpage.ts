import {Page,Locator, expect} from '@playwright/test';
 
 
export class loginorangehrmpage  {
 
    readonly Ousername:Locator;
    readonly OPassword:Locator;
    readonly LoginBtn:Locator;
    readonly logo:Locator;
 
 
    constructor(readonly page:Page){
        this.Ousername=page.getByPlaceholder("Username");
        this.OPassword=page.getByPlaceholder("Password");
        this.LoginBtn=page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
        this.logo=page.getByAltText("client brand banner");
       
    }
 
 
    async goto(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/',{waitUntil:'domcontentloaded',timeout:60000});
 
  }
   
 
    async logintoOrange(username:string,Password:string){
        await this.Ousername.fill(username);
        await this.OPassword.fill(Password);
        await this.LoginBtn.click();
 
    }
 
    async validatelogo(){
        await this.page.waitForTimeout(5000);
        await this.logo.waitFor({state:'visible'});
        await expect(this.logo).toBeVisible();
        await expect(this.logo).toHaveAttribute('alt','client brand banner');
    }
 
 
 
 
}
//OrangeHRM
 