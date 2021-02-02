import ApolloClient from 'apollo-boost';

const URI = 'https://api.github.com/graphql';
const TOKEN = process.env.REACT_APP_TOKEN || '';

console.log(TOKEN)

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
