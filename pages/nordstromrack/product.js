var productCommands ={
    fillShipping:function(){
        return this.setValue('@firstName','Paola')
                            .setValue('@lastName','Pierola')
                            .setValue('@address','Paolawest 54th street')
                            .setValue('@company','Pierola')
                            .setValue('@city','New york')
                            .click('select[id=@state]')
                            .waitForElementVisible('#ember2474>option', 1000)
                            .click('option[value=NY]')
                            .setValue('@zipCode','10019')
                            .setValue('@phoneNumber','9179701398')
                            .setValue('@nickName','Paola');
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
       secureCode:{
           selector: '#ember1485'
       },
       nickNameCard:{
            selector: '#ember1486'
       },
       firstName:{
           selector: '#ember2464'
       },
       lastName:{
           selector:'#ember2466'
       },
       address:{
           selector:'#ember2468'
       },
       company:{
           selector: '#ember2469'
       },
       city:{
           selector: '#ember2473'
       },
       state:{
           selector: '#ember2474'
       },
       zipCode:{
           selector: '#ember2596'
       },
       phoneNumber:{
           selector: '#ember2599'
       },
       buttonSave:{
           selector: '#ember1659'
       }

   }     
};