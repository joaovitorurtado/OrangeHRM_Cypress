Cenários de testes utilizados na automação

1 - Login com usuário e senha inválidas

Dado que acesso o OrangeHRM <br/>
Quando insiro o usuário "Teste"<br/>
E insinro a senha "teste123"<br/>
E clico no botão login<br/>
Então aguardo a mensagem "Invalid credentials"

2 - Login com usuário correto e senha inválida

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário "Admin"<br/>
E insinro a senha "teste123"<br/>
E clico no botão login<br/>
Então aguardo a mensagem "Invalid credentials"<br/>

3- Login com usuário e senha vazias

Dado que acesso o OrangeHRM<br/>
Quando clico no botão login<br/>
Então aguardo a mensagem "Invalid credentials"<br/>

4 - Login com usuário e senha válidas

Dado que acesso o OrangeHRM<br/>
Quando insiro o usuário "Admin"<br/>
E insinro a senha "admin123"<br/>
E clico no botão login<br/>
Então checo se estou no dashboard<br/>
