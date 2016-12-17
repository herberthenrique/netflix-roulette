describe('service netflixService', () => {
  beforeEach(angular.mock.module('netflixRoulette'));

  const mockData = { title: 'Batman' };

  it('should be registered', inject(netflixService => {
    expect(netflixService).not.toEqual(null);
  }));

  describe('url variable', () => {
    it('should exist', inject(netflixService => {
      expect(netflixService.url).not.toEqual(null);
    }));
  });


  describe('search function', () => {
    it('should exist', inject(netflixService => {
      expect(netflixService.search).not.toEqual(null);
    }));

    it('should return a Promise', inject((netflixService, $httpBackend) => {
      let requestUrl = `${netflixService.url}?title=${mockData.title}`;
      $httpBackend.when('GET', requestUrl).respond(200);

      netflixService.search(mockData.title)
        .then(data => {
          expect(data).toEqual(jasmine.any(Object));
        })
      $httpBackend.flush();
    }));
  });
});
