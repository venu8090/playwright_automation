# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Features\contactdetails.feature.spec.js >> Contact Details >> Update contact details >> Example #1
- Location: .features-gen\Features\contactdetails.feature.spec.js:12:9

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: John Doe
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - button "" [ref=f2e133] [cursor=pointer]
  - generic [ref=f2e135]:
    - generic [ref=f2e139]:
      - generic [ref=f2e140]:
        - generic [ref=f2e141]:
          - heading "John Doe" [level=6] [ref=f2e143]
          - img "profile picture" [ref=f2e146] [cursor=pointer]
        - tablist [ref=f2e147]:
          - tab [ref=f2e148]:
            - link "Personal Details" [ref=f2e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab [ref=f2e150]:
            - link "Contact Details" [ref=f2e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab [ref=f2e152]:
            - link "Emergency Contacts" [ref=f2e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab [ref=f2e154]:
            - link "Dependents" [ref=f2e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab [ref=f2e156]:
            - link "Immigration" [ref=f2e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab [ref=f2e158]:
            - link "Job" [ref=f2e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab [ref=f2e160]:
            - link "Salary" [ref=f2e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab [ref=f2e162]:
            - link "Report-to" [ref=f2e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab [ref=f2e164]:
            - link "Qualifications" [ref=f2e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab [ref=f2e166]:
            - link "Memberships" [ref=f2e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=f2e168]:
        - generic [ref=f2e169]:
          - heading "Personal Details" [level=6] [ref=f2e170]
          - separator [ref=f2e171]
          - generic [ref=f2e172]:
            - generic [ref=f2e176]:
              - generic [ref=f2e177]: Employee Full Name*
              - generic [ref=f2e179]:
                - textbox "First Name" [ref=f2e182]: John
                - textbox "Middle Name" [ref=f2e185]: Mike
                - textbox "Last Name" [ref=f2e188]: Doe
            - separator [ref=f2e189]
            - generic [ref=f2e190]:
              - generic [ref=f2e191]:
                - generic [ref=f2e193]:
                  - generic [ref=f2e194]: Employee Id
                  - textbox [ref=f2e197]: "55555"
                - generic [ref=f2e199]:
                  - generic [ref=f2e200]: Other Id
                  - textbox [ref=f2e203]: ABCXYZ
              - generic [ref=f2e204]:
                - generic [ref=f2e206]:
                  - generic [ref=f2e207]: Driver's License Number
                  - textbox [ref=f2e210]: B12345678
                - generic [ref=f2e212]:
                  - generic [ref=f2e213]: License Expiry Date
                  - generic [ref=f2e217]:
                    - textbox "yyyy-dd-mm" [ref=f2e218]: 2023-18-10
                    - generic [ref=f2e219] [cursor=pointer]: 
            - separator [ref=f2e220]
            - generic [ref=f2e221]:
              - generic [ref=f2e222]:
                - generic [ref=f2e224]:
                  - generic [ref=f2e225]: Nationality
                  - generic [ref=f2e229] [cursor=pointer]:
                    - generic [ref=f2e230]: American
                    - generic [ref=f2e231]: 
                - generic [ref=f2e234]:
                  - generic [ref=f2e235]: Marital Status
                  - generic [ref=f2e239] [cursor=pointer]:
                    - generic [ref=f2e240]: Single
                    - generic [ref=f2e241]: 
              - generic [ref=f2e243]:
                - generic [ref=f2e245]:
                  - generic [ref=f2e246]: Date of Birth
                  - generic [ref=f2e250]:
                    - textbox "yyyy-dd-mm" [ref=f2e251]: 2023-21-10
                    - generic [ref=f2e252] [cursor=pointer]: 
                - generic [ref=f2e254]:
                  - generic [ref=f2e255]: Gender
                  - generic [ref=f2e257]:
                    - generic [ref=f2e261] [cursor=pointer]:
                      - radio "Male" [checked] [ref=f2e262]
                      - text: Male
                    - generic [ref=f2e267] [cursor=pointer]:
                      - radio "Female" [ref=f2e268]
                      - text: Female
            - separator [ref=f2e270]
            - generic [ref=f2e271]:
              - paragraph [ref=f2e272]: "* Required"
              - button "Save" [ref=f2e273] [cursor=pointer]
        - generic [ref=f2e274]:
          - separator [ref=f2e275]
          - generic [ref=f2e276]:
            - heading "Custom Fields" [level=6] [ref=f2e277]
            - separator [ref=f2e278]
            - generic [ref=f2e279]:
              - generic [ref=f2e281]:
                - generic [ref=f2e283]:
                  - generic [ref=f2e284]: Blood Type
                  - generic [ref=f2e288] [cursor=pointer]:
                    - generic [ref=f2e289]: A+
                    - generic [ref=f2e290]: 
                - generic [ref=f2e293]:
                  - generic [ref=f2e294]: Test_Field
                  - textbox [ref=f2e297]: "445"
              - separator [ref=f2e298]
              - button "Save" [ref=f2e300] [cursor=pointer]
        - generic [ref=f2e301]:
          - separator [ref=f2e302]
          - generic [ref=f2e304]:
            - heading "Attachments" [level=6] [ref=f2e305]
            - button " Add" [ref=f2e306] [cursor=pointer]:
              - generic [ref=f2e307]: 
              - text: Add
          - generic [ref=f2e308]:
            - separator [ref=f2e309]
            - generic [ref=f2e310]: (1) Record Found
          - table [ref=f2e313]:
            - rowgroup [ref=f2e314]:
              - row [ref=f2e316]:
                - generic [ref=f2e317]:
                  - generic [ref=f2e318]:
                    - cell "File Name test.png" [ref=f2e320]:
                      - generic [ref=f2e321]:
                        - generic [ref=f2e322]: File Name
                        - generic [ref=f2e323]: test.png
                    - cell [ref=f2e325]:
                      - generic [ref=f2e326]:
                        - button "" [ref=f2e327] [cursor=pointer]
                        - button "" [ref=f2e329] [cursor=pointer]
                        - button "" [ref=f2e331] [cursor=pointer]
                  - generic [ref=f2e333]:
                    - cell "Description test" [ref=f2e334]:
                      - generic [ref=f2e335]:
                        - generic [ref=f2e336]: Description
                        - generic [ref=f2e337]: test
                    - cell "Size 53.16 kB" [ref=f2e338]:
                      - generic [ref=f2e339]:
                        - generic [ref=f2e340]: Size
                        - generic [ref=f2e341]: 53.16 kB
                    - cell "Type image/png" [ref=f2e342]:
                      - generic [ref=f2e343]:
                        - generic [ref=f2e344]: Type
                        - generic [ref=f2e345]: image/png
                    - cell "Date Added 2024-06-02" [ref=f2e346]:
                      - generic [ref=f2e347]:
                        - generic [ref=f2e348]: Date Added
                        - generic [ref=f2e349]: 2024-06-02
                    - cell "Added By Admin" [ref=f2e350]:
                      - generic [ref=f2e351]:
                        - generic [ref=f2e352]: Added By
                        - generic [ref=f2e353]: Admin
    - generic [ref=f2e354]:
      - paragraph [ref=f2e355]: OrangeHRM OS 5.9
      - paragraph [ref=f2e356]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e357] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import {Locator,Page} from '@playwright/test';
  2  |  
  3  | export class navigationpage{
  4  |  
  5  |     readonly page:Page;
  6  |     readonly menuitems:Locator;
  7  |     readonly header:Locator;
  8  |   constructor(page:Page){
  9  |     this.page=page;
  10 |     this.menuitems=page.locator('span.oxd-main-menu-item--name');
  11 |     this.header=page.locator('h6.oxd-topbar-header-breadcrumb-module');
  12 |   }
  13 |  
  14 |  
  15 |   async clickMenu(menuText:string){
  16 |     //await this.page.locator('span.oxd-main-menu-item--name',{hasText:menuText}).click();
  17 |     await this.menuitems.filter({hasText:menuText}).click();
  18 |     await  this.page.waitForTimeout(3000);
  19 |  
  20 |   }
  21 | 
  22 |    
  23 |  
  24 | async verifyheader(menuText:string){
> 25 |     await 
     |     ^ ReferenceError: expect is not defined
  26 |     expect(this.header.filter({hasText:menuText})).toBeVisible();
  27 |   }
  28 |  
  29 |  
  30 |  
  31 | }
```