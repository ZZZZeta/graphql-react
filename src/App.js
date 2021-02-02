import React from 'react';
import { client } from './client';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Oh. Hi!</div>
    </ApolloProvider>
  );
}

export default App;
