describe ('Data Driven Testing Suite',()=>{
    let testData;
    before ('Run Before all test', () => {
        cy.fixture('datadriventesting.json').then((jsonData)=>{
            testData = jsonData;
        })
    })
 it ('Data Driven Testing Test',()=>{
    cy.visit('https://en.wikipedia.org/wiki/Vietnam')
    cy.get('#p-search span.vector-icon').click()
    cy.get('#searchform [name="search"]').type (testData.skill1)
    cy.get('#searchform button.cdx-button').click()
 })
});