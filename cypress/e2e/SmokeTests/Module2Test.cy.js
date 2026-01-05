describe('Test Suite 2', () => {
  it('Module 2Test', () => {

    cy.log("Test1 is Started");
    cy.visit('https://www.youtube.com')
    cy.log("Navigation to YouTube site");
    cy.get('#center [name="search_query"]').type('Ho Chi Minh City in Vietnam')
    cy.get('#center button.ytSearchboxComponentSearchButton div').click();
    cy.log("Test1 is Ended");
  })
});