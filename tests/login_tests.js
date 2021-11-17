const loginpage = require("../Pages/loginpage");

Feature('login');


Scenario('login with valid credentials', async ({ I }) => {
    I.amOnPage("/")
    I.seeElement(loginpage.fields.simplifierlogo)
    I.fillField(loginpage.fields.email,'aditya.anil.chaudhari@gmail.com')
    I.fillField(loginpage.fields.password,'SimplifierStart2021!')
    I.click(loginpage.fields.signinbutton)
    I.seeElement('#__title0-inner')
/*  I.click(loginpage.fields.manageapp)
    I.doubleClick(loginpage.fields.selectapp)
    I.wait(5)
*/
});

Scenario('login with invalid credentials', async ({ I }) => {
    I.amOnPage("/")
    I.seeElement(loginpage.fields.simplifierlogo)
    I.fillField(loginpage.fields.email,'invalid@gmail.com')
    I.fillField(loginpage.fields.password,'SimplifierStart2021!')
    I.click(loginpage.fields.signinbutton)
    I.see(loginpage.fields.invalidemail)
});

Scenario('Click on signin while leaving feilds empty', async ({ I }) => {
    I.amOnPage("/")
    I.seeElement(loginpage.fields.simplifierlogo)
    I.click(loginpage.fields.signinbutton)
    I.see(loginpage.fields.emptyfieldserror)
});
