Projeto Blog DevStart
Este projeto consiste em uma página web dinâmica que realiza operações de consumo de API utilizando JavaScript assíncrono. O sistema simula um feed de postagens, permitindo o envio de novos dados e a visualização de registros existentes.

Tecnologias Utilizadas
HTML5 (Estrutura semântica)

CSS3 (Layout Responsivo e Variáveis)

JavaScript ES6+ (Manipulação de DOM e Fetch API)

JSONPlaceholder (API REST para testes)

Funcionalidades Implementadas
Consumo de API (GET): Ao carregar a página, o sistema busca os posts iniciais da API e os renderiza na seção de últimas postagens.

Envio de Dados (POST): O formulário captura as entradas de título e conteúdo, envia para o servidor via método POST e, após o sucesso, renderiza o novo post no topo da lista.

Classe CRUD: Organização da lógica de requisições em uma classe reutilizável, centralizando as configurações de cabeçalho e métodos HTTP.

Manipulação Dinâmica: Uso de insertAdjacentHTML para atualizar a interface sem a necessidade de recarregar a página.

Estrutura de Arquivos
index.html: Contém a estrutura da aplicação e os seletores necessários.

style.css: Define a identidade visual e o layout das postagens.

script.js: Gerencia a lógica de negócio e a comunicação com o servidor.

Como Executar
Clone ou baixe os arquivos do repositório.

Abra o arquivo index.html em qualquer navegador moderno.

Certifique-se de estar conectado à internet para o funcionamento das requisições de API.

Autor: Agenor S. Rodrigues
Ano: 2026