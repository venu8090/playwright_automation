import {test,expect} from "@playwright/test";
import {loginorangehrmpage} from "../orangehrmpages/loginorangehrmpage";
import {navigationpage} from "../orangehrmpages/navigationpage";
import {readExcel} from "../utilities/excelreader";
import { contactdetailspage,ContactData } from "../orangehrmpages/contactdetailspage";
import { logoutorangepage } from "../orangehrmpages/logoutorangpage";
import * as path from 'path';
import { EmergencyContactData, emergencycontactspage } from "../orangehrmpages/emergencycontactpage";
 
 
  const emergencysheet=readExcel<EmergencyContactData>('contact.xlsx','Emergencycontact');

for (const [i, data] of  emergencysheet.entries()) {  //enhanced for loop to get the index of the row for logging purposes
 
test(`Login, add emergency contact from Excel (row ${i + 1}) and logout`, async ({ page }) => {
 
    //create the page objects

    const loginorange=new loginorangehrmpage(page);

    const logoutorange=new logoutorangepage(page);

    const navigationMenu=new navigationpage(page);

    const emergency=new emergencycontactspage(page);
 
    //login

    await loginorange.goto();

    await loginorange.logintoOrange('Admin','admin123');

    await loginorange.validatelogo();
 
 
    //go to my info and open the emergency contacts tab

    await navigationMenu.clickMenu('My Info');

    //await navigationMenu.verifyheader('PIM');   //my info shows PIM in the top bar

    await emergency.openEmergencyContacts();
 
    //open the form and enter emergency contact details from excel

    await emergency.openAddForm();

    await emergency.fillEmergencyContact(data);
 
    //save and verify the contact appears in the list

    await emergency.save();

    await emergency.verifyContactInList(data.name);
 
    await logoutorange.logoutFromApplication();
 
 
});
 
}
 