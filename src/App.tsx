import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './config/route';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  )
}

export default App;