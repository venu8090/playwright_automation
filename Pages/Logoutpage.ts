import {Page,Locator} from '@playwright/test';
 
 
export class Logoutpage  {
 
readonly menu:Locator;
readonly Logout:Locator;
 
 
constructor(readonly page:Page){
    this.menu = page.getByRole('button', { name: 'Open Menu' });
    this.Logout = page.locator('#logout_sidebar_link');
}
 
async logout(){
    await this.page.waitForTimeout(3000);
    await this.menu.click();
    await this.Logout.click();
}
 
 
}