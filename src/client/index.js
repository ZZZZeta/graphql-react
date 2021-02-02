import ApolloClient from 'apollo-boost';

const URI = 'https://api.github.com/graphql';
const TOKEN = '906c0043f40d4e5301c6755519fd249b9c9c7522';

export const client = new ApolloClient({
  uri: URI,
  request: (operation) => {
    const token = TOKEN;
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});
