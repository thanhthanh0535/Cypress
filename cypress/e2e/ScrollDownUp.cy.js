describe('Scroll Down Up Test Suite', () => {
 it ('Scroll Down Up Test', () => {
    cy.visit('https://www.youtube.com/watch?v=MgmxV1NqqEs')
    cy.wait(5000)
    cy.contains('TRAVEL LIKE A PRO! 25 ESSENTIAL Tips for VIETNAM in 2025').scrollIntoView().should('be.visible').click();
    
    
 })
})