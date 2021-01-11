import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';

import Route from './config/route';
import {client} from './config/apollo';

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
