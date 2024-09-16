# language: pt
# encoding: UTF-8

Funcionalidade: Login na plataforma  

Contexto: Dado um usuário com acesso ao site da plataforma     


Cenario 1: Login com sucesso     

Dado que o usuário acessa a pagina de login da plataforma    
E digite as credenciais corretas
E clica no botão de "Entrar
Então a tela de selecionar perfil deve estar visivel


Cenário 2: Login sem sucesso

Dado que o usuario acessa a pagina de login da plataforma    
E digita credenciais incorretas
E clica no botão de "Entrar"
Então deve ser apresentado mensagem de erro ao usuario


Cenário 6: Logout da plataforma

Dado que eu esteja logado na plataforma
Quando eu clicar no icone do meu perfil no canto superior direito da tela
E clicar em Sair
Então devo ser deslogado da plataforma