---
presentation:
  width: 1500
  height: 900
  theme: night.css
---

<!-- slide -->
# Novidades do React 19
Para saber mais sobre React 19: [Documentação oficial do React 19](https://react.dev/blog/2024/04/25/react-19)

Versão lançada no dia 25 de abril de 2024 e está na versão release candidate (RC)

<!-- slide -->
> **Release Candidate, o que é?**
> É uma versão onde já está praticamente pronto para ser colocado no mercado. Tendo potencial para ser um produto final, onde todas as funcionalidades estão especificadas, testadas e implementadas por meio de uma ou mais fases de beta, onde não ocorreram bugs sérios. Praticamente pronto para ser lançado, a menos que seja identificado um defeito ou bug mais sério.

<!-- slide -->
Para saber mais sobre outras versões de software: 
> **Alfa** - É a primeira versão de um software a ser lançada. Essa versão pode não conter todos os recursos, não tem contrato de nível de serviço e não tem obrigatoriedade de suporte técnico. Elas são geralmente adequadas para uso em ambiente de teste, pois podem conter bugs e problemas. 

> **Beta** - É a fase de testes, em que o software é liberado para um grupo de pessoas para que possam testá-lo e ajudar a corrigir problemas. O foco é reduzir o impacto aos usuários, geralmente com testes de usabilidade. São usadas para recolher feedback do público, corrigir erros e melhorar a conectividade antes do lançamento oficial

> **RC** - A principal diferença entre uma versão Release Candidate (RC) e uma versão Beta é que, após o lançamento de uma versão RC, apenas alterações e correções críticas são feitas. As versões RC são geralmente mais estáveis do que as versões Beta e  incluem as correções de bugs encontrados durante a fase Beta.	

> **Canary** - Canary é uma aplicação que consiste em colocar a versão nova em produção, mas liberar o experimento dessa versão apenas para pequenos grupos

> **Final/LTS** - É uma versão de software que é considerada estável e virtualmente livre de defeitos. LTS, é a versão final que tem suporte de longo prazo

<!-- slide -->

## Iniciando o projeto
Vamos utilizar o Next.js para executar as `server actions` e simular as necessidades dos `hooks` do React 19 

```shell
npx create-next-app@14.3.0-canary.46
```

<!-- slide -->

Agora precisamos instalar a versão mais rescente do React 19, pois no Next.js vem a versão beta do React 19

```shell
npm i --save-exact react@rc react-dom@rc
```

<!-- slide -->

## Iremos abordar as seguintes novidades do React 19
- `useTransition`
- `<form action='serverAction|functions'> `
- `useActionState`
- `FormStatus`
- `use` (`context` e `Promise`)

<!-- slide -->

## useTransition
- Ele é um Hook que permite você atualizar o estado sem bloquear a interface do usuário
- Utilizamos para aquelas situações onde a gente tem uma ação do usuário que gera um estado de carregamento dentro da nossa API. Normalmente isso é feito quando querem colocar um `is loading...`


<!-- slide -->

## React DOM: <form> Actions 
- Permite inserir server actions através do formulário
- Recebe uma URL ou functions|server actions
  - Quando uma URL é passada apelo `action` o formulário se comportará como um componente de formulário HTML
  - Utilizando `serverActions`, você consegue não depender do javascript da página. Sendo executado através do servidor acoplado do Next.js

<!-- slide -->

## useActionState
- É basicamente um `Hook` que permite monitorar a execução de uma `server action`. Onde uma ação pode ser algum envio de formulário, click no botão. Sendo qualquer ação (função) que veio de ação do usuário

> O `React.useActionState` nas versões anteriores foi chamado de `ReactDOM.useFormState` o qual foi depreciado e agora se chama useActionState

<!-- slide -->

## useFormStatus
- `useFormStatus` é um Hook que fornece informações de status do último envio do formulário.
- Utilizado para controlar e pegar status enquanto ta enviando alguma coisa pelo formulário e conseguir manipular isso de forma dinâmica.
> Um exemplo é mostrar uma mensagem para o usuário quando estiver demorando a API que enviar as informações captadas pelo formulário

## use (nova api)
<!-- slide -->

- É uma função para consumir promisses quanto contextos, dentro dos componentes do React
- É um novo Hook coringa podendo ser utilizado para trabalhar com `Context` e `Promise`

> Vale comentar que no React 19, você consegue renderizar o <Context> como um provider, sem ter que declarar <Context.Provider>

> Quando utilizamos o `use` com Promise, precisamos chamar o <Suspense> como pai do nosso componente