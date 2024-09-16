/// <reference types="cypress" />

const elem = require('./elementsLogin').ELEMENTS

class login{

    validateLoginPage(){
        cy.get(elem.email).should('be.visible')
        cy.get(elem.password).should('be.visible')
    }

    typeCredentials(){
        cy.get(elem.email).type(Cypress.env('EMAIL'), { log: false })
        cy.get(elem.password).type(Cypress.env('PASSWORD'), { log: false })
        cy.get(elem.loginButton).click()
        
    }
    
    submitLogin(){
        this.typeCredentials()
        
     }

    typeCredentialsInvalid(){
        cy.get(elem.email).type('testewatch@maildrop.cc')
        cy.get(elem.password).type('12345678')
    }
    
    typeCredentialsAndLoginError(){
        this.typeCredentialsInvalid()
        cy.get(elem.loginButton).click()
    }

    validateMensageErrorLogin(){
        cy.get(elem.loginError).should('be.visible').contains('E-mail ou senha incorreta.').click()
    }

    logoutUser(){
        cy.get(elem.button_exit).should('be.visible').contains('Sair')
    }

    screenshotLoginSucess(){
        cy.screenshot('Login realizado com sucesso') // Captura uma screenshot
    }

    screenshotLoginError(){
        cy.screenshot('Login incorreto') // Captura uma screenshot
    }
}

export default new login()