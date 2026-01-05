
describe('Test Suite 1', () => {
  it('My First Test', () => {

    cy.log("Test1 is Started");
    cy.visit('https://www.youtube.com')
    cy.log("Navigation to YouTube site");
    cy.get('#center [name="search_query"]').type('Ho Chi Minh City in Vietnam')
    cy.get('#center button.ytSearchboxComponentSearchButton div').click();
    cy.log("Test1 is Ended");

    
    

  })
    it('My First Test 2', () => {

    cy.log("Test1 is Started");
    cy.visit('https://www.youtube.com')
    cy.log("Navigation to YouTube site");
    cy.get('#center [name="search_query"]').type('Ho Chi Minh City in Vietnam')
    cy.get('#center button.ytSearchboxComponentSearchButton div').click();
    cy.log("Test2 is Ended");
  })
})