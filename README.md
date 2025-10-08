Cenários de testes utilizados na automação - Login

1 - Login com usuário e senha inválidas

Dado que acesso o OrangeHRM <br/>
Quando insiro o usuário "Teste"<br/>
E insiro a senha "teste123"<br/>
E clico no botão login<br/>
Então aguardo a mensagem "Invalid credentials"

2 - Login com usuário correto e senha inválida

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário "Admin"<br/>
E insiro a senha "teste123"<br/>
E clico no botão login<br/>
Então aguardo a mensagem "Invalid credentials"<br/>

3- Login com usuário e senha vazias

Dado que acesso o OrangeHRM<br/>
Quando clico no botão login<br/>
Então aguardo a mensagem "Invalid credentials"<br/>

4 - Login com usuário e senha válidas

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário válido<br/>
E insiro a senha válida<br/>
E clico no botão login<br/>
Então checo se estou no dashboard<br/>

Cenários de testes utilizados na automação - PIM

1 - Clico na aba PIM

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário válido<br/>
E insiro a senha válida<br/>
E clico no botão login<br/>
E seleciono a aba PIM<br/>
Então checo se o header tem a mensagem PIM<br/>

2 - Seleciono o status empresarial

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário válido<br/>
E insiro a senha válida<br/>
E clico no botão login<br/>
E seleciono a aba PIM<br/>
E na aba Employment Status seleciono uma opção válida<br/>
Então checo se retornou apuração<br/>

3 - Seleciono o título do trabalho

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário válido<br/>
E insiro a senha válida<br/>
E clico no botão login<br/>
E seleciono a aba PIM<br/>
E na aba Job Title seleciono uma opção válida<br/>
Então checo se retornou apuração<br/>

4 - Insiro valores de apuração não existentes

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário válido<br/>
E insiro a senha válida<br/>
E clico no botão login<br/>
E seleciono a aba PIM<br/>
E seleciono opções inválidas<br/>
Então checo se não retornou apuração<br/>
