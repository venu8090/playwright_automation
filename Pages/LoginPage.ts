import {Page,Locator} from '@playwright/test';
 
 
export class LoginPage  {
 
    readonly username : Locator;
    readonly password:Locator;
    readonly loginBtn:Locator;
 
  constructor(readonly page:Page){
        this.username=page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginBtn=page.locator("#login-button");
 
  }
  async goto(){
    await this.page.goto('/');
 
  }
  async login(user:string,password:string){
        await this.username.fill(user);
        await this.password.fill(password);
        await this.page.waitForTimeout(3000);
        await this.loginBtn.click();
        await this.page.waitForTimeout(3000);
 
  }
 
 
 
}
 