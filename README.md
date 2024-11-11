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
  - .lista-links li a {
    color: var(--secondary-color);
}
.link-destaque {
    background-color: var(--primary-color);
    color: white;
    padding: 12px 30px;
    border-radius: 8px;
}

Esta é a abordagem correta, pois aplica um estilo distinto ao link "Publicar" usando a classe .link-destaque, 
destacando-o visualmente dos outros links através de cor de fundo, cor do texto, padding e bordas arredondadas.
  
- - - -

### Aula 2 ###    

| Aprendizado | Novidade? | Aprendi? |
|-------------|-----------|----------|
| Criar botões na página e como escolher qual elemento para isso; | Não | Sim |
| Como nomear classes com o padrão BEM (block element modifier); | Não | Sim |
| A diferença entre `<button>` e `<a>`; | Não | Sim |
| Unidade de medida responsiva `em`; | Não | Sim |
| `Display` inline e block; | Não | Revisar |
| Usar as propriedades CSS `grid` e `grid-template-columns` para dividir a tela; | Não | Revisar |
| Conferir através da ferramenta do desenvolvedor no navegador (F12) os grids na tela; | Sim | Sim |
| Detectar diferentes tipos de fontes e tamanhos de letras no Figma; | Sim | Sim |
| Escolher fontes no fonts.google.com; | Sim | Sim |
| Importar fontes externas no arquivo HTML; | Sim | Sim |
| Usar variáveis CSS para armazenar valores além de cores como o nome da fonte; | Não | Sim |
| Aplicar a fonte importada nos elementos através do CSS e outros atributos relacionados: `font-family`, `font-size`, `font-weight`; | Não | Revisar |
| Remover a decoração do texto de links através do `text-decoration`; | Não | Sim |

## Insights
  - `display: grid;
grid-template-columns: 50% 25% 25%;` Dessa maneira, a primeira coluna ocupará metade da tela e em seguida serão construídas duas colunas menores,
que ocupam a metade do tamanho da primeira cada uma.
  - Quando queremos que um evento aconteça a partir do clique do mouse, utilizamos os botões.

- - - -

### Aula 3 ###    

| Aprendizado | Novidade? | Aprendi? |
|-------------|-----------|----------|
| Afastar elementos dos cantos da tela e de outros elementos; | Sim | Sim |
| A diferença entre `margin` e `padding`; | Não | Revisar |
| Diversas maneiras de determinar os valores e as direções das margens dentro da propriedade `margin`; | Sim | Sim |
| Construir uma nova `section`; | Não | Sim |
| Reutilizar estilos através das classes dentro da nova `section`; | Sim | Sim |
| Atribuir mais de uma classe nos elementos para incluir novas estilizações além das existentes; | Sim | Sim |

## Insights
  - Margins realmente criam espaço ao redor do elemento e paddings criam dentro dele, ou seja, o padding afasta o
  conteúdo da borda e não um elemento do outro. Por fim, também 
  podemos configurar valores diferentes para cada lado do elemento e, no vídeo, vimos diversas maneiras de fazer isso.
  - ```html
    <div class="container">
    <h2 class="container__titulo">Alura Cats!</h2>
    <img src="https://thecatapi.com/api/images/get?format=src&type=gif" alt=”imagem de gatos” class="container__imagem">
      <p>Para mais informações:</p>
    <a href="www.alura.com.br" class="container__botao">Acesse a Alura<a>
    </div>
    ```
O código começa com um elemento de bloco (a div), ou seja, que tem display block, e 
há elementos dentro dele que são inline. Dessa maneira, usar a propriedade text-align na div permitirá alinhar 
para qualquer lado que você desejar os elementos filhos da div.

- - - -

### Aula 4 ###    

| Aprendizado | Novidade? | Aprendi? |
|-------------|-----------|----------|
| Usar flexbox e seu significado; | NãO | Revisar |
| Flex-containers, flex-itens, flex-direction; | Não | Revisar |
| A tag `footer`; | Sim | Sim |
| Colocar o conhecimento em prática; | Sim | Sim |
| Pseudo-classes no CSS: `hover` e `active`; | Sim | Sim |
- - - -

### Aula 5 ###    

| Aprendizado | Novidade? | Aprendi? |
|-------------|-----------|----------|
| Criar uma conta no Github; | Não | Sim |
| Construir um repositório com o código do curso; | Não | Sim |
| Escrever commits; | Não | Sim |
| Fazer deploy no Github Pages e Vercel; | Sim | Sim |
| Editar código no VSCode Web; | Sim | Sim |
| Enviar alterações para o repositório já existente; | Não | Sim |
