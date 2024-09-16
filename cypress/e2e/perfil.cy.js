/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import perfilPage from '../support/pages/perfil/perfilPage';


describe('Página de Perfil', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.suppressXHRLogging();
    });

    context('Selecionar um perfil', () => {
        
        it('Dado que o usuário acessa a pagina de login da plataforma', () => {
            loginPage.validateLoginPage()
        });
    
        it('E digita credenciais corretas', () => {
            loginPage.typeCredentials()
        });
    
        it('E clica no botão de "Entrar"', () => {
            loginPage.submitLogin()
        });
    
        it('Quando a tela de selecionar perfil estiver visivel', () => {
            loginPage.typeCredentials()
            perfilPage.perfilPageIsVisible()
        });

        it('Então deve ser possivél selecionar um perfil com sucesso', () => {
            loginPage.typeCredentials()
            perfilPage.selectPerfil()
            perfilPage.closeIfVisible()
            perfilPage.screenshotSelectProfileSucess()
    });

    });
})