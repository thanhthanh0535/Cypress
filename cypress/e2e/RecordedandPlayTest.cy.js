describe('Record and Play Suit', () => {
  it('Test1', () => {
    cy.visit('https://youtube.com/')
    
    cy.get('#center [name="search_query"]').click();
    cy.get('#center [name="search_query"]').click();
    cy.get('#center [name="search_query"]').type('Mythborne - The Iron In Her Heart (Lyrics)');
    cy.get('#center button.ytSearchboxComponentSearchButton div').click();
    cy.get('div:nth-child(3) > ytd-video-renderer:nth-child(2) > #dismissible > div.text-wrapper > #channel-info > #channel-name > #container > #text-container > #text > a.yt-simple-endpoint').click();
    cy.get('a[tabindex="-1"][href="/watch?v=nxu-ywFmwRI"] img.ytCoreImageHost').click();
    cy.get('#movie_player button.ytp-play-button').click();
    
  });

  it('Javascript', function() {
    cy.visit('https://www.youtube.com')
    
    cy.get('#center [name="search_query"]').click();
    cy.get('#center [name="search_query"]').type('javascipt by tester talk{enter}');
    cy.get('#contents h3[title="JavaScript by Testers Talk☑️"] span.yt-core-attributed-string').click();
    cy.get('#movie_player button.ytp-play-button').click();
    
  });
})