 import {test,expect,Page} from '@playwright/test'; //in built function calling from playwright
 
async function login(page:Page, username:string, password:string){
    await page.goto("https://www.saucedemo.com/");      //url will get launched  //goto to launch the url
     await page.waitForTimeout(2000);
     await page.locator("#user-name").fill(username);
     await page.waitForTimeout(2000);
     await page.locator("#password").fill(password);
     await page.waitForTimeout(2000);
     await page.locator("#login-button").click(); 

     
}


// //page represnts a single brwoser tab/page
test("Login to the Application",async ({page}) =>
{

await login(page, "standard_user", "secret_sauce");  //calling of function

     await page.goto("https://www.saucedemo.com/");      //url will get launched  //goto to launch the url
     await page.waitForTimeout(2000);
     await page.locator("#user-name").fill("standard_user");
     await page.waitForTimeout(2000);
     await page.locator("#password").fill("secret_sauce");
     await page.waitForTimeout(2000);
     await page.locator("#login-button").click();
 

//      // verification of header
     await expect (page.getByText("Swag Labs")).toBeVisible();
     await expect (page.getByText('Products')).toBeVisible();   
     await page.waitForTimeout(2000);

//      //Adding Product to the cart
const productPriceText = await page.locator('.inventory_item_price').nth(0).innerText();
console.log(productPriceText);
 
await page.locator("#add-to-cart-sauce-labs-backpack").click();
await page.waitForTimeout(2000);
await expect(page.getByText('Remove')).toBeVisible();
await page.waitForTimeout(2000);
await page.locator("#shopping_cart_container").click();
await page.waitForTimeout(2000);
await expect(page.getByText("Checkout")).toBeVisible();
 
 
const cartPriceText = await page.locator('.inventory_item_price').innerText();
console.log(cartPriceText);
//   // Assert prices match exactly
  expect(cartPriceText).toBe(productPriceText);
 
await page.getByText("Checkout").click();
await page.getByPlaceholder("First Name").fill("Sagar");
await page.getByPlaceholder("Last Name").fill("Venu");
await page.getByPlaceholder("Zip/Postal Code").fill("571110");
await page.waitForTimeout(2000);
await page.locator("#continue").click();
 
await page.getByText('Finish').click();
await page.waitForTimeout(2000);
// //writing the locator by getBtRole
    await page.getByRole('heading',{name:'Thank you for your order!'})
 
  test("Negative test case with invalid login",async ({page}) =>
{
   await page.goto("https://www.saucedemo.com/");      
        await page.waitForTimeout(2000);
     await page.locator("#user-name").fill("locked_out_user");
     await page.waitForTimeout(2000);
     await page.locator("#password").fill("secret_sauce");
     await page.waitForTimeout(2000);
     await page.locator("#login-button").click();

     expect(page.getByText('Sorry, this user has been locked out.')).toBeVisible();
});


test("Login and Logout",async ({page}) =>
{
   await page.goto("https://www.saucedemo.com/");      
        await page.waitForTimeout(2000);
     await page.locator("#user-name").fill("standard_user");
     await page.waitForTimeout(2000);
     await page.locator("#password").fill("secret_sauce");
     await page.waitForTimeout(2000);
     await page.locator("#login-button").click();


     await page.getByText("Open Menu");
     await page.getByText("Logout");
     expect(page.getByText('#login-button')).toBeVisible();

     });

});


test("Count the total number of products",async ({page}) =>
{
await login(page, "standard_user", "secret_sauce");

const prouductCount =await page.locator('.inventory_item_name').count();
  console.log('Number of products present',prouductCount);
  //verify the count
  expect(prouductCount).toBe(6);


});


test("Sort Product by low to high",async({page})=>{
 await login(page,"standard_user","secret_sauce");
 //select the drop down
 await page.locator('.product_sort_container').selectOption('Price (low to high)');
 await page.waitForTimeout(2000);
 await expect(page.locator('.product_sort_container')).toHaveValue('Price (low to high)');
 
});


 
test.only("verify dynamic Catalog Spinner",async({page})=>{
await login(page,"standard_user","secret_sauce");
await page.getByText("Open Menu").click();
await page.getByText("Dynamic Catalog").click();
await page.getByText("Spinner").click();
 
await expect(page.locator('.dynamic_catalog_spinner_grid')).toBeHidden();
await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
});




 