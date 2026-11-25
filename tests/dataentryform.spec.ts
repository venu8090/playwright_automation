import {test,expect,Page} from '@playwright/test';
import  path from 'path';  

//before the start of Application
test.beforeEach(async({page}) => {
 await page.goto("https://testautomationpractice.blogspot.com/");
});

test("Data Entry Form",async({page})=>{
   //goto is a command to launch the url
    await page.waitForTimeout(2000);//giving delay
    await page.locator("input[id='name']").fill("Test Automation");
    await page.locator("input[placeholder='Enter EMail']").fill("automation@gmail.com");
    await page.locator("//label[text()='Phone:']/following-sibling::input").fill("8904395115");
    await page.locator("//label[text()='Address:']/following-sibling::textarea").fill("Address");
    const checkbox=page.locator("input[id='male']");
    await page.locator("input[id='male']").check();
    expect(checkbox).toBeChecked();
    //expect(checkbox).not.toBeChecked();

});

test("Select options under dropdown Country and Color",async({page})=>{
        await page.locator("#country").selectOption("brazil");
        await page.locator("#colors").selectOption("white");
});

test("upload single file",async({page})=>{
   const filepath = path.resolve('files/excel.xlsx');//in this ur settin the file path
   await page.locator('#singleFileInput').setInputFiles(filepath);//this action to upload a file
   await page.getByRole('button', { name: 'Upload Single File' }).click();

   await expect(page.locator('#singleFileStatus')).toContainText('excel.xlsx');//verifying the uploaded file name
    await page.waitForTimeout(3000);
});


test("Multiple file upload",async({page})=>{
        const files=[path.resolve('files/sample1.txt'),path.resolve('files/sample3.pdf')]; 
        await page.locator('#multipleFilesInput').setInputFiles(files);
        await page.getByRole('button', { name: 'Upload Multiple Files' }).click();
        await expect(page.locator('#multipleFilesStatus')).toContainText('sample1.txt');
        await expect(page.locator('#multipleFilesStatus')).toContainText('sample3.pdf');
        await page.waitForTimeout(3000);
});

test("verify static table size",async({page})=>{
    const table=page.locator('table[name="BookTable"]');
    await expect(table.locator('tr')).toHaveCount(7);//verifying the number of rows in the table
    await expect(table.locator('th')).toHaveCount(4);//verifying the number of columns in the table
      await expect(table.locator('td')).toHaveCount(24);

      await expect(table.locator('th')).toHaveText(['BookName','Author','Subject','Price']);//verifying the column names in the table
});


test("dynamic start and Stop button",async({page})=>{
        const startButton=page.getByRole('button', { name: 'START' });
        const stopButton=page.getByRole('button', { name: 'STOP' });
 
        //check they are visible and enabled
        await expect(startButton).toBeVisible();
        await expect(startButton).toBeEnabled();
 
        await startButton.click();
 
        await expect(stopButton).toBeVisible();
        await expect(stopButton).toBeEnabled();
 
        await stopButton.click();
 
});

test('simple alert',async({page})=>{
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();//this command is ued to handle the alert and click on ok button
    });
    await page.waitForTimeout(3000);
    await page.getByText('Simple Alert').click();
    await page.waitForTimeout(3000);
});

test('confirmation alert',async({page})=>{
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        expect(dialog.message()).toBe('Press a button!');
        await dialog.accept()//this command is ued to handle the alert and click on cancel button
    });
    await page.waitForTimeout(3000);
    await page.getByText('Confirmation Alert').click();
    await page.waitForTimeout(3000);
});

test('prompt alert',async({page})=>{
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        expect(dialog.message()).toBe('Please enter your name:');
        await dialog.accept('Venu and tarrun')//this command is ued to handle the alert and click on cancel button
        await page.waitForTimeout(5000);
});
    await page.waitForTimeout(5000);
    await page.getByText('Prompt Alert').click();
    await page.waitForTimeout(5000);
});
 
test('New Tab',async({page})=>{
 
        //start waiting for the new tab to open
        const newTabPromise=page.waitForEvent('popup');//original page is waiting for the new tab to open
        await page.getByText('New Tab').click();//new tab opens after clicking on the new tab button
        await page.waitForTimeout(2000);
        const newTab=await newTabPromise;//new tab is opened and assigned to newTab variable
        await newTab.waitForLoadState();
         await page.waitForTimeout(2000);
        await expect(newTab).toHaveURL('https://www.pavantestingtools.com/');
        console.log(await newTab.title());
        await newTab.close();
        await page.bringToFront();
        await page.waitForTimeout(2000);
         console.log(await page.title());
});


test('New Window',async({page})=>{
 const newWindowPromise=page.waitForEvent('popup');
 await page.getByText('Popup Windows').click();
  await page.waitForTimeout(2000);
  const window=await newWindowPromise;
  await window.waitForLoadState();
  console.log(await window.title());
  await expect(window).toHaveURL('https://www.selenium.dev/');
  await expect(window).toHaveURL('https://www.pavantestingtools.com/');
 await window.close();
 await page.bringToFront();//this command is used to bring the original page to front
  await page.waitForTimeout(2000);
console.log(await page.title())
 
 
});

test('mouse hover action',async({page})=>{
    const mouseHover=page.getByText('Point Me')
 
    const mobiles=page.locator('.dropdown-content a',{hasText:'Mobiles'});
    const laptops=page.locator('.dropdown-content a',{hasText:'Laptops'});
 
    await expect(mobiles).toBeHidden();
    await page.waitForTimeout(2000);
    await mouseHover.hover();
     await page.waitForTimeout(2000);
    await expect(mobiles).toBeVisible();
    await expect(laptops).toBeVisible();
 
    await mobiles.click();
   
});

test('double click action',async({page})=>{
    await page.getByText('Copy Text').dblclick();
    await page.waitForTimeout(2000);
    await expect(page.locator('#field2')).toHaveValue('Hello World!');
    await page.waitForTimeout(2000);
 
});

test('Drag and Drop action',async({page})=>{
    const source=page.locator('#draggable');
    const target=page.locator('#droppable');
 
    await source.dragTo(target);
    await page.waitForTimeout(2000);
    await expect(target).toHaveText('Dropped!');
 
});
 
 
test('select Action camera checkbox from the pagination table',async({page})=>{
 
//click on defualt page:
const pagecount=await page.locator('#pagination li a').count();
await page.locator('#pagination li a').nth(0).click();
let actioncamera=page.getByText('Wireless Mouse 20');
 
for(let i=0;i< pagecount;i++){
if(await actioncamera.count()==0){
    await page.locator('#pagination li a').nth(i).click();
     await page.waitForTimeout(2000);
    expect(actioncamera).toBeVisible();
}
}
});
 


test.only('verify labels and links',async({page})=>{
  await expect(page.getByText('Samsung',{exact:true})).toBeVisible();
  await expect(page.getByRole('link',{name:'Apple',exact:true})).toBeVisible();
 
  const links= ['Apple','Lenovo','Dell'];
 
  for(const linknames of links) {
    await expect(page.getByRole('link',{name:linknames,exact:true})).toBeVisible();
  }
});


test.only('capture dynamic values',async({page})=>{
   const values=await page.locator('#displayValues p strong');
 
   const chromecpu=await values.nth(0).textContent();
    const memorsize=await values.nth(1).textContent();
    console.log('Chorme CPU:',chromecpu);
    console.log('Memore Size:',memorsize);
});
 
 
test.only('Download text file',async({page})=>{
    await page.getByText('Download Files').click();
    await page.locator('#inputText').fill('Playwright file download');
     await page.waitForTimeout(2000);
     await page.locator('#generateTxt').click();
    await page.locator('#txtDownloadLink').waitFor({state:'visible'});
   
    const downloadPromise=page.waitForEvent('download');//wait it to get download
    await page.locator('#txtDownloadLink').click();
     const download=await downloadPromise;
     await download.saveAs(path.resolve('downloads',download.suggestedFilename()));
     expect(download.suggestedFilename()).toContain('info.txt');
 
});
 

test.only('Download pdf file',async({page})=>{
    await page.getByText('Download Files').click();
    await page.locator('#inputText').fill('Playwright file download');
     await page.waitForTimeout(2000);
     await page.locator('#generatePdf').click();
    await page.locator('#pdfDownloadLink').waitFor({state:'visible'});
   
    const downloadPromise=page.waitForEvent('download');//wait it to get download
    await page.locator('#pdfDownloadLink').click();
     const download=await downloadPromise;
     await download.saveAs(path.resolve('downloads',download.suggestedFilename()));
     expect(download.suggestedFilename()).toContain('info.pdf');
 
});
 

test.only('verify subject in the table',async({page})=>{
    const subjects=page.locator('table[name="BookTable"] tr td:nth-child(3)');
    await expect(subjects).toHaveText(['Selenium','Java','Javascript','Selenium','JAVA','Javascript'])
});
 