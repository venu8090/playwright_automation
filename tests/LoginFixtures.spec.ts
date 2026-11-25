import { test, expect } from '../Fixtures/baseTest';
 
 
test('Login with valid', async ({ page, loggedInPage }) => {
  await expect(page.locator('.title')).toHaveText('Products');
});
 
test('Add to cart', async ({ addtoCart, loggedInPage }) => {
  await addtoCart.AddProductToCart();
});
 