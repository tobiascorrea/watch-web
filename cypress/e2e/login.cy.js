/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import perfilPage from '../support/pages/perfil/perfilPage';


describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.suppressXHRLogging();
    });

    context('Login com sucesso', () => {
        
        it('Dado que o usuário acessa a pagina de login da plataforma', () => {
            loginPage.validateLoginPage()
        });
    
        it('E digite as credenciais corretas', () => {
            loginPage.typeCredentials()
        });
    
        it('E clica no botão de "Entrar"', () => {
            loginPage.submitLogin()
        });
    
        it('Então a tela de selecionar perfil deve estar visivel', () => {
            loginPage.typeCredentials()
            perfilPage.perfilPageIsVisible()
            loginPage.screenshotLoginSucess()
        });

    });

    context('Login sem sucesso', () => {
        
        it('Dado que o usuario acessa a pagina de login da plataforma', () => {
            loginPage.validateLoginPage()
        });
    
        it('E digita credenciais incorretas', () => {
            loginPage.typeCredentialsInvalid()
        });
    
        it('E clica no botão de "Entrar"', () => {
            loginPage.typeCredentialsAndLoginError()
        });
    
        it('Então deve ser apresentado mensagem de erro ao usuario', () => {
            loginPage.typeCredentialsAndLoginError()
            loginPage.validateMensageErrorLogin()
            loginPage.screenshotLoginError()
        });

    });

    context('Logout da plataforma', () => {
        
        it('Dado que o usuário acessa a pagina de login da plataforma', () => {
            loginPage.validateLoginPage()
        });
    
        it('E digite as credenciais corretas', () => {
            loginPage.typeCredentials()
        });
    

        it('Quando o usuario clicar no botão "Sair"', () => {
            loginPage.typeCredentials()
            loginPage.logoutUser()
        });

        it('Então a tela de login deve estar visivel', () => {
            loginPage.validateLoginPage()
        });

    });
})