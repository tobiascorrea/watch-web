/// <reference types="cypress" />

const elem = require('./elementsHomePage').ELEMENTS

class HomePage {
    homePageIsVisible() {
        cy.get(elem.home_visible).should('be.visible').contains('Início',)
    }
    selecionarConteudo() {
        cy.scrollTo('bottom', { easing: 'linear', duration: 500 }) // Realiza o scroll até o final da página com animação
          .then(() => {
            cy.xpath(elem.selecionar_conteudo, { timeout: 15000 }) // Procura o elemento após o scroll
              .should('be.visible')
              .trigger('mouseover') // Verifica se o elemento está visível
              .click({multiple: true}); // Clica no elemento
          });
    }

    executarMidia() {
        cy.get(elem.assistir_conteudo, { timeout: 15000 })
          .trigger('mouseover') // Realiza o mouse over no elemento
          .click({multiple: true}); // Clica no elemento
    }

    screenshotExecuteMidiaSucess(){
      cy.screenshot('Midia executada com sucesso') // Captura uma screenshot
  }
}

export default new HomePage()