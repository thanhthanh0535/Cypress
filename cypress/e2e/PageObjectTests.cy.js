import HomePage from '../e2e/pages/HomePage' 
import ResultPage from '../e2e/pages/ResultPage'
import PlaylistPage from '../e2e/pages/PlaylistPage'

describe('Page Object Test Suite', ()=>{
    before('Running Page Object Test',()=>{
        cy.log('Running Before Page Object Test')
    })
    after('unning Page Object Test',()=>{
        cy.log('Running After Page Object Test')
    })
    it('Page Object Test1',() =>{
        //Open youtube
        HomePage.visit();
        //search in youtube
        HomePage.searchInYoutube();
        //Go to playlist
        ResultPage.gotoPlaylists();
        //Validate list title
        PlaylistPage.elements.playlistTitle().should('have.text','Best Vietnamese Songs 2026 - Popular Vietnamese Songs 2026 Playlist (Top Vietnamese Music 2026-2027)')

    })
})