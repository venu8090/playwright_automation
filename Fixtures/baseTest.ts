import {test as base,expect} from '@playwright/test'; //deafualt
import { LoginPage } from '../Pages/LoginPage';
import { AddToCart } from '../Pages/AddToCart';
import { Logoutpage } from '../Pages/Logoutpage';
 
 
type MyFixtures ={  //creating your own fixtures
   loginpage:LoginPage;
   addtoCart:AddToCart;
   logoutpage:Logoutpage;
   loggedInPage:void; //setup//teardown only ,nothing to return
}
 
export const test =base.extend<MyFixtures>({ //deafualt command to call newly craeted fixtures
 loginpage:async({page},use)=>{
    await use(new LoginPage(page))
 },
 //use     -->prefare the fixture, provide it to test,perform cleanup
 addtoCart:async({page},use)=>{
    await use(new AddToCart(page));
 },
 
 logoutpage:async({page},use)=>{
    await use(new Logoutpage(page));
 },
 
//common set up:
 loggedInPage:async({loginpage,logoutpage},use)=>{
 
    //login
    await loginpage.goto();
    await loginpage.login('standard_user','secret_sauce');
 
///perfrom what is the in the spec file
    await use(); ///perfrom what is the in the spec file
 
    //teardown after test
    await logoutpage.logout();
 },
 
});
 
export {expect};