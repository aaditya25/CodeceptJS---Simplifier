const applicationpage = require("../Pages/applicationpage");
const loginpage = require("../Pages/loginpage");

Feature('Access application');


Scenario('Open aleardy created applications', async ({ I }) => {
    I.amOnPage("/")
    I.seeElement(loginpage.fields.simplifierlogo)
    loginpage.signin()
    I.click(loginpage.fields.manageapp)
    I.doubleClick(loginpage.fields.selectapp)
    I.see('FeedbackApp')
    I.wait(5)
});
Scenario('Create new applications', async ({ I }) => {
    I.amOnPage("/")
    loginpage.signin()
    I.click(applicationpage.fields.createapp)
    I.switchToNextTab(1)
    I.see(applicationpage.fields.checkpopup)
    I.fillField(applicationpage.fields.appname,'automatedtesting')
    I.fillField(applicationpage.fields.appdescription,'automated testing using codeceptjs')
    I.click(applicationpage.fields.projectassign)
    I.see('Select Project')
    I.click(applicationpage.fields.selectproject)
    I.click(applicationpage.fields.confirmapp)
    I.see(applicationpage.fields.checkcreatedapp)
});