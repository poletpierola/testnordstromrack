var loginCommands ={
    signIn: function(){
        return this.click('@btnSignIn')
                   .setValue('@usernameField','polet.pierola.marquez@gmail.com')
                   .setValue('@passwordField','test123')
                   .click('@submit');
                   
    }
};

module.exports = {
   url: 'http://www.nordstromrack.com',
   commands:[loginCommands],
   elements:{
       usernameField:{
           selector: 'input[name=email]'
       },
       passwordField:{
           selector: 'input[name=password]'
       },
       btnLogin:{
           selector: 'a.secondary-nav__link'
       },
       btnSignIn:{
           selector: 'a.authentication-modal__alternate-action'
       },
       submit:{
           selector: 'div.authentication-modal__submit > button.cta-button.cta-button--nordstromrack'
       }
   }     
};