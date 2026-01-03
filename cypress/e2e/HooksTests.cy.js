describe('Hooks Test Suite', () => {
    before('Running once before all test', () => {
        cy.log('This is executed once before all test case');
    })
    after('Running once after all test', () => {
        cy.log('This is executed once after all test case');
    })

    beforeEach('Running before each test', () => {
        cy.log('This is executed before each test case');
    })
    afterEach('Running after each test', () => {
        cy.log('This is executed after each test case');
    })
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
    it('Assertions2', function() {
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
})