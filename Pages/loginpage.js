const { I } = inject();

module.exports = {
  fields: {
    simplifierlogo:'#Login--loginLogo',
    email: '#Login--loginUsername-inner',
    password: '#Login--loginPassword-inner',
    signinbutton: '#Login--loginButton-content',
    dashbaord: '#__title0-inner',
    manageapp: '#__button7-inner',
    selectapp: '//*[contains(@title,"FeedbackApp")]',
    invalidemail: 'The supplied authentication is invalid',
    emptyfieldserror: 'Please provide username and password',
    createapp: '#__button6-inner'
  },
  async signin() {
    I.seeElement(this.fields.simplifierlogo)
    I.fillField(this.fields.email, 'aditya.anil.chaudhari@gmail.com')  
    I.fillField(this.fields.password, 'SimplifierStart2021!') 
    I.click(this.fields.signinbutton)
    I.seeElement(this.fields.dashbaord)

  }

}
