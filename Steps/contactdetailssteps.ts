import { Given, When, Then } from '../Fixtures/fixture';
import { ContactData } from '../orangehrmpages/contactdetailspage';
import { readExcel } from '../utilities/excelreader';
 
Given(
  'Login to orangeHRM Site and enter username as "Admin" and Password as "admin123"',
  async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.logintoOrange('Admin', 'admin123');
  },
);
 
When('I open the contact details tab', async ({ navigation, contact }) => {
  await navigation.clickMenu('My Info');
  await navigation.verifyheader('PIM');
  await contact.openContactDetails();
});
 
When('I fill the contact form using excel {int}', async ({ contact }, row: number) => {
  const contacts = readExcel<ContactData>('contact.xlsx', 'Contact');
  const data = contacts[row - 1];
 
  if (!data) {
    throw new Error(`Excel row ${row} was not found in contact.xlsx`);
  }
 
  await contact.fillContactDetails(data);
});
 
When('I Save the contact details', async ({ contact }) => {
  await contact.addAttachment(
    'Inputfile/sample.pdf',
    'Uploaded a file',
  );
  await contact.save();
});
 
Then('I logout from the application', async ({ logoutPage }) => {
  await logoutPage.logoutFromApplication();
});

