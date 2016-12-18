describe('Login Page', function() {
  it('should go to login page', function() {
    browser.url('http://localhost:3000/#/account');
    browser.waitForExist('.container')
    expect(browser.isVisible('.account-section')).to.equal(true);
  });

});
