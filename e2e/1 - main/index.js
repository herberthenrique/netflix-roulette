describe('Main Page', function() {
  describe('Movie Search', function () {
    it('should open site and search for a movie', function () {
      browser.url('http://localhost:3000');
      browser.waitForExist('.container')
      expect(browser.getTitle()).to.equal('netflixRoulette');

    });

    it('should search a movie', function () {
      browser.setValue('#input-search-movie', 'Forrest Gump')
      browser.click('#btn-search-movie');
      browser.waitForVisible('.movie-box', 3000)
      expect(browser.getText('.movie-box__info__title')).to.equal('Forrest Gump')
    })
  });
});
