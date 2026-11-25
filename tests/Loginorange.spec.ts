import {test,expect} from '@playwright/test';
import { loginorangehrmpage } from '../orangehrmpages/loginorangehrmpage';
import { logoutorangepage } from '../orangehrmpages/logoutorangpage';
import { navigationpage } from '../orangehrmpages/navigationpage';

 
 
test('Launch the Browser and login to orange Site and logout',async({page})=>{
   const loginorange=new loginorangehrmpage(page);
   const logoutorange=new logoutorangepage(page);
   const navigationMenu=new navigationpage(page);
   await loginorange.goto();
  await loginorange.logintoOrange('Admin','admin123');
  await loginorange.validatelogo();
   await navigationMenu.clickMenu('Time');
 
  await logoutorange.logoutFromApplication();
   
 
 
});