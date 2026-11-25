import { expect, Locator, Page } from '@playwright/test';

export class navigationpage {

  readonly page: Page;
  readonly menuitems: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuitems = page.locator('span.oxd-main-menu-item--name');
    this.header = page.locator('h6.oxd-topbar-header-breadcrumb-module');
  }

  async clickMenu(menuText: string) {
    await this.menuitems.filter({ hasText: menuText }).click();
    await this.page.waitForTimeout(3000);
  }

  async verifyheader(menuText: string) {
    await expect(this.header.filter({ hasText: menuText })).toBeVisible();
  }
}