describe('Test Suite 2', () => {
  it('Suite 2 Test 1', () => {

    cy.log("Test1 is Started");
    cy.visit('https://www.youtube.com')
    cy.log("Navigation to YouTube site");
    cy.get('#center [name="search_query"]').type('Ho Chi Minh City in Vietnam')
    cy.get('#center button.ytSearchboxComponentSearchButton div').click();
    cy.log("Test1 is Ended");
  })
    it('Suite 2 Test 2', () => {

    cy.log("Test1 is Started");
    cy.visit('https://www.youtube.com')
    cy.log("Navigation to YouTube site");
    cy.get('#center [name="search_query"]').type('Ho Chi Minh City in Vietnam')
    cy.get('#center button.ytSearchboxComponentSearchButton div').click();
    cy.log("Test1 is Ended");
  })
});