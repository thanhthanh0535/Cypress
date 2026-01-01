describe('Cypress Assertions Suite', () => 
{
  it('Cypress Assertions Test', () => {
    
  });

  it('Assertions1', function() {
    cy.visit('https://en.wikipedia.org/wiki/Vietnam')
    //cy.get('#firstHeading span.mw-page-title-main').click();

    cy.get('#firstHeading span.mw-page-title-main').then((element)=>{
      expect(element.text()).to.equal('Vietnam');
    })

    cy.get('#firstHeading span.mw-page-title-main').should('have.text', 'Vietnam');
    cy.get('#firstHeading span.mw-page-title-main').should('contain', 'Vietnam');
    cy.get('#firstHeading span.mw-page-title-main').should('be.visible');
    cy.get('#firstHeading span.mw-page-title-main').should('have.html', 'Vietnam');
    cy.get('#mw-content-text img[alt="Flag of Vietnam"]').should('have.attr','src').and('include','Flag_of_Vietnam.svg');
    cy.get('#firstHeading span.mw-page-title-main').then((element)=>{
      expect(element.text()).to.have.length(7);
    })
    
  })

});


