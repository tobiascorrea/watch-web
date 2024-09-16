/// <reference types="cypress" />

const elem = require('./elementsPerfil').ELEMENTS

class PerfilPage {
    perfilPageIsVisible() {
        cy.get(elem.avatars, { timeout: 10000 }).should('contain', 'Quem está assistindo?')
        cy.get(elem.profile_name).should('be.visible')
    }

    selectPerfil() {
        cy.get(elem.profile_image,{ timeout: 10000 }).should('be.visible').click()
    }
    closeIfVisible() {
        this.selectPerfil()
        cy.get(elem.close_button, { timeout: 10000 }).should('exist').then(($btn) => {
            if ($btn.is(':visible')) {
                cy.get(elem.close_button).click()
            }
            else {
                cy.get(elem.validate_profile_visible, { timeout: 10000 }).should('be.visible')
            }
        })
    }

    screenshotSelectProfileSucess(){
        cy.screenshot('Perfil selecionado com sucesso') // Captura uma screenshot
    }
}

export default new PerfilPage()