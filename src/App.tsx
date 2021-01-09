import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import Route from './config/route';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
