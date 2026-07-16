# Lista de Compras

Aplicativo mobile de lista de compras desenvolvido em **React Native** com **Expo**. Permite adicionar, remover, marcar itens como comprados e filtrar a lista por status, com os dados salvos localmente no dispositivo.

## Funcionalidades

- ✅ Adicionar itens à lista de compras
- ✅ Marcar itens como pendentes ou comprados
- ✅ Filtrar itens por status (Pendentes / Comprados)
- ✅ Remover um item individualmente
- ✅ Limpar toda a lista
- ✅ Persistência de dados local com AsyncStorage (os itens continuam salvos mesmo depois de fechar o app)

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) para persistência de dados
- [Lucide Icons](https://lucide.dev/) para os ícones

## Como executar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) e o app [Expo Go](https://expo.dev/client) instalado no celular (ou um emulador Android/iOS configurado).

```bash
# Clone o repositório
git clone https://github.com/Alyssonln/ListaDeCompras.git

# Acesse a pasta do projeto
cd ListaDeCompras

# Instale as dependências
npm install

# Inicie o projeto
npm start
