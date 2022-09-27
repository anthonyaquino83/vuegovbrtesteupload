# Web Components GOVBR-DS - Quickstart Vue

## Descrição

Projeto exemplificando o uso da [biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents "Biblioteca de Web Components do GOVBR-DS") em projetos [Vue](https://vuejs.org/ "Vue").

Esse projeto usa Vue 3 `<script setup>` SFCs. Confira os [documentos de configuração do script](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) para aprender mais.

## Tecnologias

Esse projeto é desenvolvido usando:

1. [Biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents "Biblioteca de Web Components do GOVBR-DS")
1. [Vue 3](https://vuejs.org/ "Vue 3").
1. [TypeScript](https://www.typescriptlang.org/ "TypeScript").
1. [Vite](https://vitejs.dev/ "Vite").

Para saber mais detalhes sobre Web Components sugerimos que consulte o [MDN](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components "Web Components | MDN").

## Dependências

As principais dependências do projeto são:

1. [GOVBR-DS](https://www.gov.br/ds/ "GOVBR-DS")

1. [Web Components](https://gov.br/ds/webcomponents/ "Web Components GOVBR-DS")

1. [Font Awesome](https://fontawesome.com/ "Font Awesome")

1. [Fonte Rawline](https://www.cdnfonts.com/rawline.font/ "Fonte Rawline")

> O fontawesome e a fonte rawline podem ser importadas de um CDN. Consulte a documentação no site do GOVBR-DS para mais detalhes

## Como executar o projeto?

```sh
git clone git@gitlab.com:govbr-ds/dev/wbc/govbr-ds-wbc-quickstart-vue.git

npm install

npm run dev
```

Após isso o projeto vai estar disponível no endereço `http://127.0.0.1:5173/`.

OBS: Para contribuir com o projeto o clone pode não ser a maneira correta. Por favor consulte nossos guias sobre como contribuir na nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ "Wiki").

## Utilizando os Web Components

Inclua essas duas importações no arquivo _main.ts_.

```javascript
import "../node_modules/@govbr-ds/webcomponents/dist/webcomponents.umd.min.js";
```

## Precisa de ajuda?

> Por favor **não** crie issues para fazer perguntas...

Use nossos canais abaixo para obter tirar suas dúvidas:

-   Site do GOVBR-DS [http://gov.br/ds](http://gov.br/ds)

-   Web Components [https://gov.br/ds/webcomponents/](https://gov.br/ds/webcomponents/)

-   Pelo nosso email [govbr-ds@serpro.gov.br](govbr-ds@serpro.gov.br)

-   Usando nosso canal no discord [https://discord.gg/U5GwPfqhUP](https://discord.gg/U5GwPfqhUP)

## Como contribuir?

Antes de abrir um Merge Request tenha em mente algumas informações:

-   Esse é um projeto opensource e contribuições são bem-vindas.
-   Para facilitar a aprovação da sua contribuição, escolha um título curto, simples e explicativo para o MR, e siga os padrões da nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ 'Wiki').
-   Quer contribuir com o projeto? Confira o nosso guia [como contribuir](./CONTRIBUTING.md 'Como contribuir?').

### Commits

Nesse projeto usamos um padrão para branches e commits. Por favor observe a documentação na nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ "Wiki") para aprender sobre os nossos padrões.

## Créditos

Os Web Components do GOVBR-DS são criados pelo [SERPRO](https://www.serpro.gov.br/ "SERPRO | Serviço Federal de Processamento de Dados") e [Dataprev](https://www.dataprev.gov.br/ "Dataprev | Empresa de Tecnologia e Informações da Previdência") juntamente com a participação da comunidade.

## Licença

Nesse projeto usamos a licença MIT.
