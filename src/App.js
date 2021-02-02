import React from 'react';
import { client } from './client';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from './router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
