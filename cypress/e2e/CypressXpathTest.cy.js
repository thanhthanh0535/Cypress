
describe('Test Xpath Suite ', () => {
  it('My First Test Xpath', () => {

    cy.log("TestXpath is Started");
    cy.visit('https://en.wikipedia.org/wiki/Vietnam')
    cy.get('#p-search span.vector-icon').click();;
    cy.xpath('//div[@id="simpleSearch"]//input[@name="search"]').should('be.visible').type('Ho Chi Minh City');
    cy.xpath('//div[@id="simpleSearch"]//input[@name="search"]').should('be.visible').clear();
    cy.xpath('//div[@id="simpleSearch"]//input[@name="search"]').should('be.visible').type('Ha Noi');
    cy.log("TestXpath is Ended");

  })
})