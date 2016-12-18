describe('Login Page', function() {
  it('should go to login page', function() {
    browser.url('http://localhost:3000/#/account');
    browser.waitForExist('.container')
    expect(browser.isVisible('.account-section')).to.equal(true);
  });

  it('should do login', function() {
    browser.setValue('#login-field-email', 'tony@stark.com')
    browser.setValue('#login-field-password', '123')
    browser.click('.sign-in');
    browser.waitForVisible('.right-navbar', 3000);
    expect(browser.getText('.right-navbar')).to.equal('Olá Tony Stark | Logout');
  });
});
