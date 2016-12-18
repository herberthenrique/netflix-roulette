describe('Favorites', function() {
  it('should search a movie', function() {
    browser.url('http://localhost:3000');
    browser.waitForExist('.container')

    browser.setValue('#input-search-movie', 'Forrest Gump')
    browser.click('#btn-search-movie');
    browser.waitForVisible('.movie-box', 3000)
    expect(browser.getText('.movie-box__info__title')).to.equal('Forrest Gump')
  })

  it('should add to favorite', function() {
    browser.click('.add-favorite');
    expect(browser.getText('.movie-boxe__info__favorite')).to.equal('Remove from favorites');
  });

  it('should it see in favorites page', function() {
    expect(browser.getText('.movie-box__info__title')).to.equal('Forrest Gump')
  });
});
