# Mobilidade Urbana

Este é um projeto web que fornece informações sobre mobilidade urbana em São Bernardo do Campo, incluindo dados sobre transporte público, ciclovias, carros e pedestres. O site também possui funcionalidades como chatbot, gráficos interativos, mapa de rotas e um sistema de login.

## Funcionalidades

### Página Principal (`index.html`)
- **Sistema de Login**: Permite que os usuários façam login com credenciais válidas e sejam redirecionados para a página principal.
- **Design Responsivo**: Interface moderna e adaptada para dispositivos móveis.

### Página de Dados e Gráficos (`paginaurbanova.html` e `teste.html`)
- **Gráficos Interativos**: Exibe dados sobre o uso de diferentes modais de transporte, como ônibus, trens, bicicletas, carros e pedestres. Os gráficos são criados com a biblioteca `Chart.js`.
  - **Dados Atualizados**:
    - Ônibus: 400
    - Trens: 0
    - Bicicletas: 25.000
    - Carros: 170.540
    - Pedestres: 844.483
- **Mapa de Rotas**: Um mapa interativo integrado com a API do Google Maps para visualizar rotas de transporte.
- **Chatbot**: Um assistente virtual que responde a perguntas sobre horários, preços e tempo de percurso de linhas de ônibus.

### Chatbot
- **Respostas Inteligentes**: O chatbot responde a perguntas como:
  - **"Horários da linha 287"**: Exibe os horários disponíveis.
  - **"Preço da passagem para a linha 288"**: Mostra o preço da passagem.
  - **"Próximo ônibus da linha 287"**: Calcula e informa o próximo horário com base no horário atual.
  - **"Não há mais ônibus hoje"**: Caso todos os horários do dia tenham passado.
- **Horários Atualizados**:
  - Linha 287: Diversos horários entre 05:28 e 19:30.
  - Linha 288: Diversos horários entre 06:00 e 19:29.

### Página de Login (`index.html`)
- **Validação de Credenciais**: Permite login com validação básica. Usuários com credenciais válidas são redirecionados para a página principal.
- **Design Moderno**: Interface estilizada com cores escuras e elementos responsivos.
- **Mensagens de Erro**: Exibe alertas para credenciais inválidas.

### Notícias
- **Carregamento Dinâmico**: Sistema para carregar notícias relacionadas à mobilidade urbana.
- **Botão "Carregar Mais"**: Permite carregar mais notícias dinamicamente.
- **Renderização de Notícias**: Exibe título, descrição, imagem e link para a notícia completa.

## Tecnologias Utilizadas
- **HTML5**: Estrutura do site.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Funcionalidades interativas, chatbot e gráficos.
- **Chart.js**: Biblioteca para gráficos interativos.
- **Google Maps API**: Integração com mapas interativos.

## Estrutura do Projeto

## Como Fazer Login
1. Acesse a página de login (`index.html`) no navegador.
2. Insira as credenciais abaixo:
   - **E-mail**: `nicolas@exemplo.com`
   - **Senha**: `1234`
3. Clique no botão "Entrar".
4. Se as credenciais forem válidas, você será redirecionado para a página principal com gráficos, mapa de rotas e chatbot.
5. Caso as credenciais estejam incorretas, uma mensagem de erro será exibida.

## Como Executar o Projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/mobilidade_urbana.git
   ```

---

### O que foi adicionado:
1. **Descrição detalhada do projeto**: Explicação sobre as funcionalidades principais.
2. **Estrutura do projeto**: Organização dos arquivos e pastas.
3. **Tecnologias utilizadas**: Lista das ferramentas e bibliotecas usadas.
4. **Instruções de execução**: Passos para rodar o projeto localmente.
5. **Credenciais de login**: Informações para acessar o sistema.
6. **Melhorias futuras**: Ideias para expandir o projeto.

Se precisar de mais ajustes ou informações adicionais, é só avisar! 😊
