import { expect, Locator, Page,test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import * as path from 'path';
 
// Describes one row of the Excel sheet (column names must match the Excel headers)
export interface ContactData {
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string | number;
  country: string;
  home: string | number;
  mobile: string | number;
  work: string | number;
  workEmail: string;
  otherEmail: string;
}
 
export class contactdetailspage {
  readonly page: Page;
  readonly contactTab: Locator;
  readonly saveButton: Locator;
  readonly toast: Locator;
  readonly addAttachmentButton: Locator;
readonly attachmentForm: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.contactTab = page.getByRole('link', { name: 'Contact Details' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.toast = page.locator('.oxd-toast');
      this.addAttachmentButton = page
    .locator('.orangehrm-attachment')
    .getByRole('button', { name: 'Add' });
 
  // The "Add Attachment" form (scoped so we don't hit the other Save button)
  this.attachmentForm = page.locator('form', {
  has: page.getByPlaceholder('Type comment here'),
  
  });
}
 async openContactDetails() {
  await test.step('open Contact Details Tab',async()=>{
  await this.contactTab.click();
 
  await expect(
    this.page.getByRole('heading', { name: 'Contact Details' })
  ).toBeVisible({ timeout: 60_000 });
 
  // Wait until the form is actually rendered and usable
  const street1 = this.page
    .locator('.oxd-input-group', {
      has: this.page.getByText('Street 1', { exact: true }),
    })
    .locator('input');
 
  await expect(street1).toBeVisible({ timeout: 60_000 });
  await expect(street1).toBeEditable({ timeout: 60_000 });
});
 }
 
  // ---------- Reusable helper: fill any text box using its label ----------
  async fillByLabel(label: string, value: string | number | undefined) {
 
    // Step 1: Excel can give numbers or empty cells, so convert to clean text
    const text = String(value ?? '').trim();
 
    // Step 2: if the Excel cell is empty, do nothing
    if (!text) return;
 
    await test.step(`Fill"${label}="${text}"`,async()=>{
    // Step 3: find the box (.oxd-input-group) that contains this exact label text
    const group = this.page.locator('.oxd-input-group', {
      has: this.page.getByText(label, { exact: true }), // exact so "Work" does not match "Work Email"
    });
 
    // Step 4: inside that box, find the input and type the value
    await group.locator('input').clear();
    await group.locator('input').fill(text); // fill() clears old text first
    await this.page.waitForTimeout(1000); // wait a bit for the UI to update (e.g., for the Save button to become enabled)
  });
}
 
  // ---------- Country dropdown ----------
   async selectCountry(country: string) {
    if (country) {
      await this.page.locator('div[class="oxd-select-text-input"]').click();          // open the dropdown
      await this.page
      .locator('.oxd-select-option')
      .filter({ hasText: new RegExp(`^${country}$`) })   // exact match: India, not British Indian Ocean Territory
      .click(); // pick the country
    }
  }
 
  // ---------- Fill the whole form ----------
  async fillContactDetails(data: ContactData) {
    await test.step('Fill Contact Details form',async()=>{
      await allure.attachment('Excel test data',JSON.stringify(data,null,2),{contentType:'application/json'})
    });
   
    await test.step('Enter the address',async()=>{
      // Address
    await this.page.waitForTimeout(10000);
    await this.fillByLabel('Street 1', data.street1);
    await this.fillByLabel('Street 2', data.street2);
    await this.fillByLabel('City', data.city);
    await this.fillByLabel('State/Province', data.state);
    await this.fillByLabel('Zip/Postal Code', data.zip);
    await this.selectCountry(data.country);
     await allure.attachment('Form Filling',
    await this.page.screenshot({fullPage:true}),{contentType:'image/png'});
 
      });
 
    await test.step('Enter telephone',async()=>{  
    // Telephone
    await this.fillByLabel('Home', data.home);
    await this.fillByLabel('Mobile', data.mobile);
    await this.fillByLabel('Work', data.work);
 
    });
    await test.step('Fill email address',async()=>{
    // Email
    await this.fillByLabel('Work Email', data.workEmail);
    await this.fillByLabel('Other Email', data.otherEmail);
    });
 
}
 
 async addAttachment(filePath: string, comment?: string) {
  await test.step(`Add attachment "${filePath}"`, async () => {
    // Open the "Add Attachment" form
    await this.addAttachmentButton.click();
    await expect(
      this.page.getByRole('heading', { name: 'Add Attachment' })
    ).toBeVisible({ timeout: 30_000 });
 
    // Select the file
    const fileInput = this.page.locator('input[type="file"]');
    await fileInput.waitFor({ state: 'attached', timeout: 30_000 });
    await fileInput.setInputFiles(filePath);
 
    // Optional comment
    if (comment) {
      await this.attachmentForm.getByPlaceholder('Type comment here').fill(comment);
    }
 
    await allure.attachment(
      'Attachment form',
      await this.page.screenshot({ fullPage: true }),
      { contentType: 'image/png' }
    );
 
    // Save (scoped to the attachment form, because the page has two Save buttons)
    await this.attachmentForm.getByRole('button', { name: 'Save' }).click();
 
    // The form closes only when the save really succeeded
    await expect(
      this.page.getByRole('heading', { name: 'Add Attachment' })
    ).toBeHidden({ timeout: 30_000 });
 
    // Verify the file now appears in the attachments list (after saving)
    const fileName = path.basename(filePath);
    await expect(
      this.page.locator('.oxd-table-card').filter({ hasText: fileName }).first()
    ).toBeVisible({ timeout: 30_000 });
  });
}
 
 
  async save() {
     await test.step('Save Contact Details',async()=>{
  await this.saveButton.click();
  await expect(this.toast).toContainText('Success', { timeout: 30_000 });
  await allure.attachment('Save Validation',
    await this.page.screenshot({fullPage:true}),{contentType:'image/png'});
 
      });
}
}
 