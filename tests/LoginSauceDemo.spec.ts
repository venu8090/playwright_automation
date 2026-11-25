import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { AddToCart } from '../Pages/AddToCart';
import { Logoutpage } from '../Pages/Logoutpage';
 
test.beforeEach(async({page})=>{
const loginpage=new LoginPage(page);//use to create a object of a class
await loginpage.goto();
await loginpage.login('standard_user','secret_sauce');
 
});
 
test('Login with Valid Credentails',async({page})=>{
 
    await expect(page.locator('.title')).toHaveText('Products');
 
});
 
test('Add to Cart',async({page})=>{
    const addtocart=new AddToCart(page);
    await addtocart.AddProductToCart();
 
 
});
 
test.afterEach(async({page})=>{
       const logout=new Logoutpage(page);
        await logout.logout();
 
});