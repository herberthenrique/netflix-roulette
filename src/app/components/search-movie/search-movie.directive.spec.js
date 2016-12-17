describe('directive search', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('netflixRoulette'));

  beforeEach(inject(($compile, $rootScope) => {
    const scope = $rootScope.$new();
    element = $compile('<search-movie></search-movie>')(scope);
    scope.$digest();
    vm = element.scope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(vm).toEqual(jasmine.any(Object));
    expect(vm.title).not.toEqual(null);
    expect(vm.service).not.toEqual(null);
    expect(vm.result).toEqual(null);
  });

  it('should search for some movie and change result', inject(($httpBackend) => {
    let url = 'http://netflixroulette.net/api/api.php?title=Batman';
    $httpBackend.expectGET(url).respond(200);
    vm.title = 'Batman';
    vm.search();

    $httpBackend.flush();
    expect(vm.result).not.toEqual(null);
  }));
});
