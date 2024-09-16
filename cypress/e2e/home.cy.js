/// <reference types="cypress" />

import homePage from '../support/pages/home/homePage';
import loginPage from '../support/pages/login/loginPage';
import perfilPage from '../support/pages/perfil/perfilPage';

describe('Página Home | Conteudos', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.suppressXHRLogging();
    });
    
    context('Acessar Conteudo disponivél na home com sucesso', () => {
        
        it('Deve acessar um conteudo com sucesso', () => {
            loginPage.typeCredentials()
            perfilPage.selectPerfil()
            perfilPage.closeIfVisible()
            homePage.homePageIsVisible()
            homePage.selecionarConteudo()
            homePage.executarMidia()
            homePage.screenshotExecuteMidiaSucess()
        });
        
            
        });

    });

