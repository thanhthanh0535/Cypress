describe('Retry Rerun Suite', () => {
    it ('Retry Rerun Test',{retries: 1}, () => {
        cy.visit('https://en.wikipedia.org/wiki/Vietnam')
        //attribute selector
        cy.get('#firstHeading span.mw-page-title-main').then((element)=>{
        cy.log('Attribute Text: ' + element.text());
    })
            //id selector
        cy.get('#firstHeading').then((element)=>{
        cy.log('ID Text: ' + element.text());
    })
        //class,first, last, index selector
        cy.get('#ca-nstab-main > a1').first().click();
        cy.get('#ca-nstab-main > a1').last().click();
        //cy.get('#ca-nstab-main > a').eq(1).click();

        //start-with & ends-with
        cy.get('#p-search span.vector-icon').click();
        cy.get('#searchform [name="search"]').type('Ho Chi Minh City');
        cy.get('#searchform button.cdx-button').click();
        
        //contains selector
        cy.contains('Ho Chi Minh City');

        cy.get('#ca-talk > a1').click();



    });
 });
