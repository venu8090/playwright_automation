import { expect, Locator, Page, test } from '@playwright/test';

import * as allure from 'allure-js-commons';
 
// Describes one row of the Excel sheet (column names must match the Excel headers)

export interface EmergencyContactData {

  name: string;

  relationship: string;

  homeTelephone: string | number;

  mobile: string | number;

  workTelephone: string | number;

}
 
export class emergencycontactspage {

  readonly page: Page;

  readonly emergencyTab: Locator;

  readonly addButton: Locator;

  readonly formHeading: Locator;

  readonly emergencyForm: Locator;

  readonly saveButton: Locator;

  readonly toast: Locator;
 
  constructor(page: Page) {

    this.page = page;

    this.emergencyTab = page.getByRole('link', { name: 'Emergency Contacts' });

    this.toast = page.locator('.oxd-toast');
 
    // The page has TWO "Add" buttons (Emergency Contacts + Attachments),

    // so we take the one that sits next to the "Assigned Emergency Contacts" heading

    this.addButton = page

      .getByRole('heading', { name: 'Assigned Emergency Contacts' })

      .locator('..')

      .getByRole('button', { name: 'Add' });
 
    // The "Save Emergency Contact" form (scoped so we don't hit other buttons)

    this.formHeading = page.getByRole('heading', { name: 'Save Emergency Contact' });

    this.emergencyForm = page.locator('form', {  has: page.getByText(/^Relationship\s*\*?$/),});

    this.saveButton = this.emergencyForm.getByRole('button', { name: 'Save' });

  }
 
  // ---------- Open the tab and wait until it is usable ----------

  async openEmergencyContacts() {

    await test.step('Open Emergency Contacts tab', async () => {

      await this.emergencyTab.click();

      await expect(

        this.page.getByRole('heading', { name: 'Assigned Emergency Contacts' })

      ).toBeVisible({ timeout: 60_000 });

      await expect(this.addButton).toBeVisible({ timeout: 60_000 });

    });

  }
 
  // ---------- Click "Add" and wait for the form ----------

  async openAddForm() {

    await test.step('Open Save Emergency Contact form', async () => {

      await this.addButton.click();

      await expect(this.formHeading).toBeVisible({ timeout: 30_000 });

    });

  }
 
  // ---------- Reusable helper: fill any text box using its label ----------

  async fillByLabel(label: string, value: string | number | undefined) {

    // Excel can give numbers or empty cells, so convert to clean text

    const text = String(value ?? '').trim();
 
    // If the Excel cell is empty, do nothing

    if (!text) return;
 
    await test.step(`Fill "${label}" = "${text}"`, async () => {

      // Labels like "Name*" carry a required marker, so match the label

      // exactly but allow an optional trailing "*"

      const labelRegex = new RegExp(`^${label}\\s*\\*?$`);
 
      const group = this.emergencyForm.locator('.oxd-input-group').filter({

        has: this.page.getByText(labelRegex),

      });
 
      const input = group.locator('input');

      await input.clear();

      await input.fill(text);

    });

  }
 
  // ---------- Fill the whole form ----------

  async fillEmergencyContact(data: EmergencyContactData) {

    await test.step('Attach Excel test data', async () => {

      await allure.attachment('Excel test data', JSON.stringify(data, null, 2), {

        contentType: 'application/json',

      });

    });
 
    await test.step('Enter name and relationship', async () => {

      await this.fillByLabel('Name', data.name);

      await this.fillByLabel('Relationship', data.relationship);

    });
 
    await test.step('Enter telephone numbers', async () => {

      await this.fillByLabel('Home Telephone', data.homeTelephone);

      await this.fillByLabel('Mobile', data.mobile);

      await this.fillByLabel('Work Telephone', data.workTelephone);
 
      await allure.attachment('Form Filling', await this.page.screenshot({ fullPage: true }), {

        contentType: 'image/png',

      });

    });

  }
 
  // ---------- Save and verify ----------

  async save() {

    await test.step('Save Emergency Contact', async () => {

      await this.saveButton.click();

      await expect(this.toast).toContainText('Success', { timeout: 30_000 });

      await allure.attachment('Save Validation', await this.page.screenshot({ fullPage: true }), {

        contentType: 'image/png',

      });

    });

  }
 
  // ---------- Verify the contact now appears in the list ----------

  async verifyContactInList(name: string) {

    await test.step(`Verify "${name}" is in the Assigned Emergency Contacts list`, async () => {

      // The form closes after a successful save

      await expect(this.formHeading).toBeHidden({ timeout: 30_000 });
 
      await expect(

        this.page.locator('.oxd-table-card').filter({ hasText: name }).first()

      ).toBeVisible({ timeout: 30_000 });

    });

  }
 
  // ---------- One-call flow: add a contact end to end ----------

  async addEmergencyContact(data: EmergencyContactData) {

    await this.openAddForm();

    await this.fillEmergencyContact(data);

    await this.save();

    await this.verifyContactInList(data.name);

  }

}
 