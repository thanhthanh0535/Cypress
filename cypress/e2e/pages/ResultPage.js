class ResultPage {
    elements = {
        playlist: () => cy.get('#contents h3[title="Best Vietnamese Songs 2026 - Popular Vietnamese Songs 2026 Playlist (Top Vietnamese Music 2026-2027)"] span.yt-core-attributed-string'),
        
    }
    gotoPlaylists() {
        this.elements.playlist().first().click({force:true});
        
    }

}
module.exports = new ResultPage();