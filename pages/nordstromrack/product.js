var productCommands ={
    fillShipping:function(){
        return this.setValue('@firstName','Paola')
                            .setValue('@lastName','Pierola')
                            .setValue('@address','Paola')
                            .setValue('@company','Pierola')
                            .setValue('@city','Paola')
                            .click('select[id=@state]')
                            .waitForElementVisible('#ember1417>option', 1000)
                            .click('option[value=AA]')
                            .setValue('@zipCode','Paola')
                            .setValue('@phoneNumber','5555555555')
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
       firstName:{
           selector: '#ember1407'
       },
       lastName:{
           selector:'#ember1409'
       },
       address:{
           selector:'#ember1411'
       },
       company:{
           selector: '#ember1412'
       },
       city:{
           selector: '#ember1416'
       },
       state:{
           selector: '#ember1417'
       },
       zipCode:{
           selector: '#ember1539'
       },
       phoneNumber:{
           selector: '#ember1542'
       },
       nickName:{
           selector: '#ember1543'
       }

   }     
};