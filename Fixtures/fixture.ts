import {test as base,createBdd} from 'playwright-bdd';
import { loginorangehrmpage } from '../orangehrmpages/loginorangehrmpage';
import { contactdetailspage } from '../orangehrmpages/contactdetailspage';
import { navigationpage } from '../orangehrmpages/navigationpage';
import { logoutorangepage } from '../orangehrmpages/logoutorangpage';
 
type Pages={
    loginPage:loginorangehrmpage;
    logoutPage:logoutorangepage;
    navigation:navigationpage;
    contact:contactdetailspage;
}
 
export const test=base.extend<Pages>({
    loginPage:async({page},use)=>use(new loginorangehrmpage(page)),
    logoutPage:async({page},use)=>use(new logoutorangepage(page)),
    navigation:async({page},use)=>use(new navigationpage(page)),
    contact:async({page},use)=>use(new contactdetailspage(page)),
});
 
export const{Given,When,Then}=createBdd(test);
 