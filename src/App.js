import React from 'react';
import ApolloProvider from '@apollo/react-hooks';
import { client } from './client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Oh. Hi!</div>
    </ApolloProvider>
  );
}

export default App;
