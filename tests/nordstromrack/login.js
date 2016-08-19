module.exports = {
    'login': function(browser){
        var login = browser.page.nordstromrack.login();
        browser.pause(2000);
        login.navigate().click('@btnLogin')
                        .signIn();
    },
    'validate login successful' : function(browser){
        browser.waitForElementVisible('a.secondary-nav__link',2000);
        browser.assert.containsText('a.secondary-nav__link','Account');
    },
    'select product': function(browser){
        var product = browser.page.nordstromrack.product();
        product.navigate().click('@selectCategory')
                          .assert.visible('@selectLeftPanel')
                          .click('@selectType')
                          .waitForElementVisible('@catalogGrid',2000)
                          .click('@selectProduct')
                          .waitForElementVisible('@productDetails',2000)
                          .click('@productAddToCart')
                          .waitForElementVisible('@cartAmount',2000)
                          .click('@checkout')
                          .waitForElementVisible('@shippingAndPayment',2000)
                          .fillShipping();
                         
                         
                          
    }
    
};