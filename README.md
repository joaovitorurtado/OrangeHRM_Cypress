Cenários de testes utilizados na automação

1 - Login com usuário e senha inválidas

Dado que acesso o OrangeHRM
Quando insiro o usuário "Teste"
E insinro a senha "teste123"
E clico no botão login
Então aguardo a mensagem "Invalid credentials"

2 - Login com usuário correto e senha inválida

Dado que acesso o OrangeHRM
Quando insiro o usuário "Admin"
E insinro a senha "teste123"
E clico no botão login
Então aguardo a mensagem "Invalid credentials"

3- Login com usuário e senha vazias

Dado que acesso o OrangeHRM
Quando clico no botão login
Então aguardo a mensagem "Invalid credentials"

4 - Login com usuário e senha válidas

Dado que acesso o OrangeHRM
Quando insiro o usuário "Admin"
E insinro a senha "admin123"
E clico no botão login
Então checo se estou no dashboard
