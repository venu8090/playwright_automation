import {test,expect} from "@playwright/test";
import {loginorangehrmpage} from "../orangehrmpages/loginorangehrmpage";
import {navigationpage} from "../orangehrmpages/navigationpage";
import {readExcel} from "../utilities/excelreader";
import { contactdetailspage,ContactData } from "../orangehrmpages/contactdetailspage";
import { logoutorangepage } from "../orangehrmpages/logoutorangpage";
import * as path from 'path';
 
 
 
  const contactsheet=readExcel<ContactData>('contact.xlsx','Contact');
for (const [i, data] of  contactsheet.entries()) {  //enhanced for loop to get the index of the row for logging purposes
 
 test(`Login, fill contact details from Excel (row ${i + 1}) and logout`, async ({ page }) => {
 
    //create the page objects
    const loginorange=new loginorangehrmpage(page);
    const logoutorange=new logoutorangepage(page);
    const navigationMenu=new navigationpage(page);
    const contact=new contactdetailspage(page);
 
    //login
    await loginorange.goto();
    await loginorange.logintoOrange('Admin','admin123');
    await loginorange.validatelogo();
 
 
    //go to my info and open the contact details tab
    await navigationMenu.clickMenu('My Info');
   // await navigationMenu.verifyheader('PIM');   //my info shows PIM in the top bar
    await contact.openContactDetails();
 
    //enter contact details from excel
    await contact.fillContactDetails(data);
 
    await contact.addAttachment(path.resolve(process.cwd(),'Inputfile/sample.pdf'),
    'Uplaoded a file');
 
    await contact.save();
 
    await logoutorange.logoutFromApplication();
 
 
});
 
}
 