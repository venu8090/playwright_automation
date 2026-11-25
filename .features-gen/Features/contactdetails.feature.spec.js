// Generated from: Features\contactdetails.feature
import { test } from "../../Fixtures/fixture.ts";

test.describe('Contact Details', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('Login to orangeHRM Site and enter username as "Admin" and Password as "admin123"', null, { loginPage }); 
  });
  
  test.describe('Update contact details', () => {

    test('Example #1', async ({ When, Then, And, contact, logoutPage, navigation }) => { 
      await When('I open the contact details tab', null, { contact, navigation }); 
      await And('I fill the contact form using excel 1', null, { contact }); 
      await And('I Save the contact details', null, { contact }); 
      await Then('I logout from the application', null, { logoutPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Features\\contactdetails.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Login to orangeHRM Site and enter username as \"Admin\" and Password as \"admin123\"","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I open the contact details tab","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I fill the contact form using excel 1","stepMatchArguments":[{"group":{"start":36,"value":"1"},"parameterTypeName":"int"}]},{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I Save the contact details","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I logout from the application","stepMatchArguments":[]}]},
]; // bdd-data-end