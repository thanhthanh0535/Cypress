class HomePage {
    elements = {
        searchBox: () => cy.get('#center [name="search_query'),
        searchButton: () => cy.get('#center button.ytSearchboxComponentSearchButton div')
    }
    visit() {
        cy.visit('https://www.youtube.com/');
    }
    searchInYoutube() {
        this.elements.searchBox().type('Best Vietnamese Songs 2026 - Popular Vietnamese Songs 2026 Playlist (Top Vietnamese Music 2026-2027)')
        this.elements.searchButton().click();
    }
}

module.exports= new HomePage();