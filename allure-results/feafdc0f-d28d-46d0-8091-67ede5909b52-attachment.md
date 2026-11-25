# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: emergencycontact.spec.ts >> Login, add emergency contact from Excel (row 1) and logout
- Location: tests\emergencycontact.spec.ts:15:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - generic:
    - complementary [ref=f6e4]:
      - navigation "Sidepanel" [ref=f6e5]:
        - generic [ref=f6e6]:
          - link [ref=f6e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f6e9]
          - text: 
        - generic [ref=f6e10]:
          - generic [ref=f6e11]:
            - generic [ref=f6e12]:
              - textbox "Search" [ref=f6e15]
              - button "" [ref=f6e16] [cursor=pointer]
            - separator [ref=f6e18]
          - list [ref=f6e19]:
            - listitem [ref=f6e20]:
              - link "Admin" [ref=f6e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f6e25]:
              - link "PIM" [ref=f6e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f6e41]:
              - link "Leave" [ref=f6e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f6e46]:
              - link "Time" [ref=f6e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f6e54]:
              - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f6e62]:
              - link "My Info" [ref=f6e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f6e70]:
              - link "Performance" [ref=f6e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f6e80]:
              - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f6e85]:
              - link "Directory" [ref=f6e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f6e90]:
              - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f6e96]:
              - link "Claim" [ref=f6e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f6e105]:
              - link "Buzz" [ref=f6e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f6e110]:
      - generic [ref=f6e111]:
        - generic [ref=f6e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f6e114]
        - link [ref=f6e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e117] [cursor=pointer]
        - list [ref=f6e123]:
          - listitem [ref=f6e124]:
            - generic [ref=f6e125] [cursor=pointer]:
              - img "profile picture" [ref=f6e126]
              - paragraph [ref=f6e127]: John Doe
              - generic [ref=f6e128]: 
      - navigation "Topbar Menu" [ref=f6e130]:
        - list [ref=f6e131]:
          - button "" [ref=f6e133] [cursor=pointer]
  - generic [ref=f6e135]:
    - generic [ref=f6e139]:
      - generic [ref=f6e140]:
        - generic [ref=f6e141]:
          - heading "John Doe" [level=6] [ref=f6e143]
          - img "profile picture" [ref=f6e146] [cursor=pointer]
        - tablist [ref=f6e147]:
          - tab [ref=f6e148]:
            - link "Personal Details" [ref=f6e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab [ref=f6e150]:
            - link "Contact Details" [ref=f6e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab [ref=f6e152]:
            - link "Emergency Contacts" [ref=f6e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab [ref=f6e154]:
            - link "Dependents" [ref=f6e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab [ref=f6e156]:
            - link "Immigration" [ref=f6e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab [ref=f6e158]:
            - link "Job" [ref=f6e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab [ref=f6e160]:
            - link "Salary" [ref=f6e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab [ref=f6e162]:
            - link "Report-to" [ref=f6e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab [ref=f6e164]:
            - link "Qualifications" [ref=f6e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab [ref=f6e166]:
            - link "Memberships" [ref=f6e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=f6e168]:
        - generic [ref=f6e169]:
          - heading "Personal Details" [level=6] [ref=f6e170]
          - separator [ref=f6e171]
          - generic [ref=f6e172]:
            - generic [ref=f6e176]:
              - generic [ref=f6e177]: Employee Full Name*
              - generic [ref=f6e179]:
                - textbox "First Name" [ref=f6e182]: John
                - textbox "Middle Name" [ref=f6e185]: Mike
                - textbox "Last Name" [ref=f6e188]: Doe
            - separator [ref=f6e189]
            - generic [ref=f6e190]:
              - generic [ref=f6e191]:
                - generic [ref=f6e193]:
                  - generic [ref=f6e194]: Employee Id
                  - textbox [ref=f6e197]: "55555"
                - generic [ref=f6e199]:
                  - generic [ref=f6e200]: Other Id
                  - textbox [ref=f6e203]: ABCXYZ
              - generic [ref=f6e204]:
                - generic [ref=f6e206]:
                  - generic [ref=f6e207]: Driver's License Number
                  - textbox [ref=f6e210]: B12345678
                - generic [ref=f6e212]:
                  - generic [ref=f6e213]: License Expiry Date
                  - generic [ref=f6e217]:
                    - textbox "yyyy-dd-mm" [ref=f6e218]: 2023-18-10
                    - generic [ref=f6e219] [cursor=pointer]: 
            - separator [ref=f6e220]
            - generic [ref=f6e221]:
              - generic [ref=f6e222]:
                - generic [ref=f6e224]:
                  - generic [ref=f6e225]: Nationality
                  - generic [ref=f6e229] [cursor=pointer]:
                    - generic [ref=f6e230]: American
                    - generic [ref=f6e231]: 
                - generic [ref=f6e234]:
                  - generic [ref=f6e235]: Marital Status
                  - generic [ref=f6e239] [cursor=pointer]:
                    - generic [ref=f6e240]: Single
                    - generic [ref=f6e241]: 
              - generic [ref=f6e243]:
                - generic [ref=f6e245]:
                  - generic [ref=f6e246]: Date of Birth
                  - generic [ref=f6e250]:
                    - textbox "yyyy-dd-mm" [ref=f6e251]: 2023-21-10
                    - generic [ref=f6e252] [cursor=pointer]: 
                - generic [ref=f6e254]:
                  - generic [ref=f6e255]: Gender
                  - generic [ref=f6e257]:
                    - generic [ref=f6e261] [cursor=pointer]:
                      - radio "Male" [checked] [ref=f6e262]
                      - text: Male
                    - generic [ref=f6e267] [cursor=pointer]:
                      - radio "Female" [ref=f6e268]
                      - text: Female
            - separator [ref=f6e270]
            - generic [ref=f6e271]:
              - paragraph [ref=f6e272]: "* Required"
              - button "Save" [ref=f6e273] [cursor=pointer]
        - generic [ref=f6e274]:
          - separator [ref=f6e275]
          - generic [ref=f6e276]:
            - heading "Custom Fields" [level=6] [ref=f6e277]
            - separator [ref=f6e278]
            - generic [ref=f6e279]:
              - generic [ref=f6e281]:
                - generic [ref=f6e283]:
                  - generic [ref=f6e284]: Blood Type
                  - generic [ref=f6e288] [cursor=pointer]:
                    - generic [ref=f6e289]: A+
                    - generic [ref=f6e290]: 
                - generic [ref=f6e293]:
                  - generic [ref=f6e294]: Test_Field
                  - textbox [ref=f6e297]: "8948"
              - separator [ref=f6e298]
              - button "Save" [ref=f6e300] [cursor=pointer]
        - generic [ref=f6e301]:
          - separator [ref=f6e302]
          - generic [ref=f6e304]:
            - heading "Attachments" [level=6] [ref=f6e305]
            - button " Add" [ref=f6e306] [cursor=pointer]:
              - generic [ref=f6e307]: 
              - text: Add
          - generic [ref=f6e308]:
            - separator [ref=f6e309]
            - generic [ref=f6e310]: (1) Record Found
          - table [ref=f6e313]:
            - rowgroup [ref=f6e314]:
              - row [ref=f6e315]:
                - columnheader "" [ref=f6e316]:
                  - generic [ref=f6e318] [cursor=pointer]:
                    - checkbox "" [ref=f6e319]
                    - generic [ref=f6e320]: 
                - columnheader "File Name" [ref=f6e322]
                - columnheader "Description" [ref=f6e323]
                - columnheader "Size" [ref=f6e324]
                - columnheader "Type" [ref=f6e325]
                - columnheader "Date Added" [ref=f6e326]
                - columnheader "Added By" [ref=f6e327]
                - columnheader "Actions" [ref=f6e328]
            - rowgroup [ref=f6e329]:
              - row [ref=f6e331]:
                - cell "" [ref=f6e332]:
                  - generic [ref=f6e335] [cursor=pointer]:
                    - checkbox "" [ref=f6e336]
                    - generic [ref=f6e337]: 
                - cell "test.png" [ref=f6e339]
                - cell "test" [ref=f6e341]
                - cell "53.16 kB" [ref=f6e343]
                - cell "image/png" [ref=f6e345]
                - cell "2024-06-02" [ref=f6e347]
                - cell "Admin" [ref=f6e349]
                - cell [ref=f6e351]:
                  - generic [ref=f6e352]:
                    - button "" [ref=f6e353] [cursor=pointer]
                    - button "" [ref=f6e355] [cursor=pointer]
                    - button "" [ref=f6e357] [cursor=pointer]
    - generic [ref=f6e359]:
      - paragraph [ref=f6e360]: OrangeHRM OS 5.9
      - paragraph [ref=f6e361]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e362] [cursor=pointer]:
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