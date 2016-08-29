var productCommands ={
    fillShipping:function(){
        return this.setValue('@cardNumber','12345678910')
                            .click('@expirationDate')
                            .waitForElementVisible('#ember1413>option',3000)
                            .click('#ember1447')
                            .click('@year')
                            .waitForElementVisible('#ember1454>option',3000)
                            .click('#ember1474')
                            .setValue('@secureCode','444')
                            .setValue('@nickNameCard','test123')
                            .setValue('@firstName','Paola')
                            .setValue('@lastName','Pierola')
                            .setValue('@address','Paolawest 54th street')
                            .setValue('@company','Pierola')
                            .setValue('@city','New york')
                            .click('@state')
                            .waitForElementVisible('#ember1519>option', 1000)
                            .click('option[value=NY]')
                            .setValue('@zipCode','10019')
                            .setValue('@phoneNumber','9179701398')
                            .setValue('@nickNameCard','Paola')
                            .click('@buttonSave');
    }
};

module.exports = {
   url: 'http://www.nordstromrack.com',
   commands:[productCommands],
   elements:{
       selectCategory:{
           selector: 'ul.primary-nav.primary-nav--nordstromrack:nth-child(1)'
       },
       selectType:{
           selector: 'ul.cat-root>li.first.last>ul.menu_level_1.cat-department>li:nth-child(1)'
       },
       selectLeftPanel:{
           selector: 'li.first.last'
       },
       selectProduct:{
           selector: 'div.catalog-grid>div.catalog-grid-row>div.catalog-grid-cell>a.catalog-grid-product'
       },
       catalogGrid:{
           selector:'div.catalog-grid'
       },
       productDetails:{
           selector: 'div.description__section.description__details.description__markedup-content'
       },
       productAddToCart:{
           selector: 'div.add-to-cart-container>button.add-to-cart.add-to-cart--nordstromrack'
       },
       cartAmount:{
           selector: 'span.cart-button__count'
       },
       checkout:{
           selector: 'div.full-cart__footer>a.full-cart__checkout-button'
       },
       shippingAndPayment:{
           selector: 'div.checkout-page__right>div.checkout-page__shipping-and-payment.checkout-page__large-text'
       },
       cardNumber:{
           selector: '#ember1405'
       },
       expirationDate:{
           selector: '#ember1413'
       },
       year:{
           selector: '#ember1454'
       },
       secureCode:{
           selector: '#ember1485'
       },
       nickNameCard:{
            selector: '#ember1486'
       },
       firstName:{
           selector: '#ember1509'
       },
       lastName:{
           selector:'#ember1511'
       },
       address:{
           selector:'#ember1513'
       },
       company:{
           selector: '#ember1514'
       },
       city:{
           selector: '#ember1518'
       },
       state:{
           selector: '#ember1519'
       },
       zipCode:{
           selector: '#ember1641'
       },
       phoneNumber:{
           selector: '#ember1644'
       },
       buttonSave:{
           selector: '#ember1659'
       }

   }     
};