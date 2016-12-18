describe('directive navbar', function() {
  let element;

  beforeEach(angular.mock.module('netflixRoulette'));

  beforeEach(inject(($compile, $rootScope) => {
    const scope = $rootScope.$new();
    element = $compile('<navbar></navbar>')(scope);
    scope.$digest();
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });
});
