describe('Scroll Down Up Test Suite', () => {
 it ('Scroll Down Up Test', () => {
    cy.visit('https://www.youtube.com/watch?v=MgmxV1NqqEs')
    cy.wait(5000)
    cy.contains('These Cafes Changed How I See Saigon').scrollIntoView().should('be.visible').click();

    
 })
})