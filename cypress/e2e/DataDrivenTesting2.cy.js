const jsonData= require('../fixtures/datadriventesting2.json') //current folder
describe ('Data Driven Testing Suite 2',()=>{

    jsonData.forEach ((testData) => {
        it ('Data Driven Test 2',()=>{
            cy.visit('https://en.wikipedia.org/wiki/Vietnam')
            cy.get('#p-search span.vector-icon').click()
            cy.get('#searchform [name="search"]').type (testData.skill1)
            cy.get('#searchform button.cdx-button').click() 
        })

    })

});