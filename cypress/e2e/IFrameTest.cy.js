import 'cypress-iframe'
describe('IFrame Test Suite', () => {
 it ('IFrame Test', () => {
    cy.visit('./iframesdemo.html')
    //cy.frameLoaded('[name="myframe"]') //frame name
    //cy.contains('About').click()
    cy.frameLoaded('#buttonframe'); //frame id
    cy.iframe().contains('Downloads').click();
 })
})


