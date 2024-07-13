# Bem vindo teste Stone 👋

Este aplicativo é feito em [Expo](https://expo.dev), projeto criado com [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

Foi desenvolvida uma comunicação com a API da marvel para alimentar a listagem de produtos e permitir uma rolagem infinita no catalogo.

## Get started

1. Instale as dependencias

   ```bash
   npm install
   ```

2. Inicie o app

   ```bash
    npx expo start
   ```

## Componentes
Foram desenvolvidos 3 componentes para a realização do teste

**Produto**
Componente de renderiozação do produto na listagem, segue exemplo de utilização e tipagem do componente:

   ```bash
   <Product
      id={item.id}
      image={item.image}
      title={item.title}
   />
   interface ProductItemProps {
      id: number;
      image: string;
      title: string;
   }
   ```

**Loading**
Componente de Loading, segue exemplo de utilização:

   ```bash
   <Loading />
   ```

**IconCart**
Componente de Icone do carrinho do header da aplicação,  segue exemplo de utilização do componente:

   ```bash
    <IconCart />
   ```
