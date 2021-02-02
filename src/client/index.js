import ApolloClient from 'apollo-boost';

const URI = 'https://graphql.anilist.co/';

export const client = new ApolloClient({
  uri: URI,
});
