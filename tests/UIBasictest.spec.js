//test comes from playwright/test package
const {test, expect} = require('@playwright/test');

//only to trigger only this test
test('Browser Playwright Test',async ({browser})=>{
    //async to use await
    //playwright code

    //chrome - plugins/ cookies
    //this open a new fresh browser
    const context = await browser.newContext();
    const page = await context.newPage();
    //2 above lines are default if you dont need to add any cookies, plugins,... to the browser
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();
});

test('Page Playwright Test',async ({page})=>{
   
    await page.goto("https://google.com");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});