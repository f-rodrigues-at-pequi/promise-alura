Promise<a name="TOP"></a>
===================
- - - - 

### Aula 1 ###    

 | Aprendizado                                                                                                                                             | Novidade? | Aprendi? |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Criar interfaces de usuário para páginas da web que permitem o carregamento de imagens.                                                                 | Não       | Revisar      |
| Criar um botão de upload de imagem e associá-lo a um campo de entrada de arquivo oculto.                                                                | Não       | Revisar      |
| Estilizar botões personalizados mantendo a funcionalidade padrão do HTML.                                                                               | Não       | Sim      |
| Usar JavaScript para adicionar um ouvinte de evento de clique ao botão de upload, acionando o campo de entrada de arquivo oculto.                       | Sim       | Sim      |

## Insights
  - ``` css
    .lista-links li a {
        color: var(--secondary-color);
    }
    .link-destaque {
        background-color: var(--primary-color);
        color: white;
        padding: 12px 30px;
        border-radius: 8px;
    }
    ```

Esta é a abordagem correta, pois aplica um estilo distinto ao link "Publicar" usando a classe .link-destaque, 
destacando-o visualmente dos outros links através de cor de fundo, cor do texto, padding e bordas arredondadas.
  
- - - -

### Aula 2 ###    

| Aprendizado | Novidade? | Aprendi? |
|-------------|-----------|----------|
| Utilizar promessas para lidar com operações assíncronas, como a leitura de arquivos, de forma eficaz.                                                                     | Sim       | Sim      |
| Simplificar o código assíncrono usando as palavras-chave `async` e `await` para esperar que as promessas sejam resolvidas.                                                | Sim       | Sim      |
| Usar o objeto `FileReader` para ler o conteúdo de arquivos de imagem de forma assíncrona.                                                                                 | Não       | Revisar      |
| Manipular elementos do DOM para exibir imagens e textos carregados pelos usuários na página.                                                                              | Não       | Sim      |
| Tratar erros em operações assíncronas usando `try/catch` em funções assíncronas.                                                                                          | Sim       | Sim      |


## Insights
  - ``` javascript
    const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
     imagemPrincipal.src = conteudoDoArquivo.url;
     nomeDaImagem.textContent = arquivo.name;
    ```

Esta alternativa é correta porque utiliza a função lerConteudoDoArquivo com await para ler o conteúdo do arquivo de forma assíncrona, e depois atualiza o src da imagem principal e o texto do nome da imagem com os dados lidos.

- - - -

### Aula 3 ###    

| Aprendizado                                                                                                                                                                         | Novidade? | Aprendi? |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Manipular o Document Object Model (DOM) para adicionar e remover elementos dinamicamente usando JavaScript.                                                                        | Não       | Revisar      |
| Usar listeners de eventos para capturar ações do(a) usuário(a), como pressionar a tecla Enter e clicar em ícones de remoção.                                                       | Sim       | Sim      |
| Criar elementos HTML dinamicamente e inseri-los na página.                                                                                                                          | Sim       | Revisar      |
| Usar funções assíncronas, `async/await` e Promises para realizar verificações assíncronas antes de adicionar tags.                                                                 | Não       | Revisar      |
| A delegação de eventos pode tornar nosso código mais eficiente, adicionando um único event listener a um elemento pai para gerenciar eventos em seus filhos.                       | Não       | Revisar      |


## Insights
  - Utilizar addEventListener para capturar o evento de clique no ícone de remoção e tagExistsAsync para verificar a validade da tag antes de adicioná-la.

```javascript
  tagsInput.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        const tagText = tagsInput.value.trim();
        if (await tagExistsAsync(tagText)) {
            // Adiciona a tag
        }
    }
   });
   tagsList.addEventListener('click', (event) => {
       if (event.target.classList.contains('remove-tag')) {
           // Remove a tag
       }
   });
 ```
- - - -

### Aula 4 ###    

| Aprendizado                                                                                                                                                                        | Novidade? | Aprendi? |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Verificar a validade de uma tag de forma assíncrona antes de adicioná-la à lista, usando JavaScript.                                                                              | Sim       | Sim      |
| Usar `try...catch` para capturar e tratar erros durante operações assíncronas.                                                                                                    | Sim       | Sim      |
| Capturar os dados de um formulário, incluindo nome, descrição e tags do projeto, preparando-os para envio.                                                                        | Sim       | Sim      |
| Simular uma requisição de publicação de projeto usando Promises para alternar entre sucesso e falha.                                                                              | Não       | Revisar      |
| Usar `event.preventDefault()` para controlar o fluxo de envio de formulários e manipular os dados de forma personalizada.                                                        | Sim       | Sim      |
## Insights
 - ```javascript
    tagsInput.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const tagText = tagsInput.value.trim();
            if (tagText !== '') {
                try {
                    const tagExists = await tagExistsAsync(tagText);
                    if (tagExists) {
                        const newTag = document.createElement('li');
                        newTag.innerHTML = `<p>${tagText}</p><img src="./img/close-black.svg" class="remove-tag">`;
                        tagsList.appendChild(newTag);
                        tagsInput.value = '';
                    } else {
                        alert('Tag não encontrada. Por favor, insira uma tag válida.');
                    }
                } catch (error) {
                    console.error('Erro ao verificar a existência da tag:', error);
                    alert('Erro ao verificar a existência da tag. Verifique o console para mais detalhes.');
                }
            }
        }
    });
   ```
 
 Este código segue corretamente a abordagem async/await para operações assíncronas, utiliza try...catch para manipulação de erros e implementa a lógica condicional para verificar a existência da tag antes de adicioná-la, alinhando-se com a solução proposta no contexto.

- - - -

### Aula 5 ###    

| Aprendizado                                                                                                                                                                        | Novidade? | Aprendi? |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| Simular a publicação de um projeto, capturando os dados do formulário e utilizando uma função que aleatoriamente retorna sucesso ou erro.                                         | Sim       | Sim      |
| Utilizar um bloco `try...catch` para lidar com os resultados da simulação, exibindo mensagens de sucesso ou erro ao usuário.                                                      | Sim       | Sim      |
| Usar `async/await` para gerenciar a execução de funções assíncronas, permitindo que o código espere a conclusão da função de publicação.                                          | Sim       | Sim      |
| Limpar todos os campos de um formulário, restaurar a imagem padrão e limpar a lista de tags, preparando o formulário para um novo uso.                                           | Sim       | Sim      |
| Restaurar o estado inicial de um formulário, incluindo a imagem e o nome da imagem, utilizando manipulação direta do DOM e reset de formulário.                                  | Sim       | Sim      |

## Insights
 - Utilizar try...catch no evento do botão "Publicar" e diferenciar o feedback para o usuário com alert para sucesso e erro.


Esta abordagem permite a Alex capturar e lidar com erros de forma eficaz no ponto de chamada da função publicarProjeto, utilizando async/await. Além disso, fornece um meio direto de informar o usuário sobre o sucesso ou falha da operação, alinhando-se com as melhores práticas de experiência do usuário.
