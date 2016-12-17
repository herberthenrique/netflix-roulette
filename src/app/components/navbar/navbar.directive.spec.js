describe('directive navbar', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('netflixRoulette'));

  beforeEach(inject(($compile, $rootScope) => {
    const scope = $rootScope.$new();
    element = $compile('<navbar></navbar>')(scope);
    scope.$digest();
    vm = element.scope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(vm).toEqual(jasmine.any(Object));
  });
});
