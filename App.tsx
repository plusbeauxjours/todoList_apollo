import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Text, View} from 'react-native';
import apollo from './src/apollo';

const App: React.FC = () => (
  <ApolloProvider client={apollo}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>React Native todoList with Apollo</Text>
    </View>
  </ApolloProvider>
);

export default App;
