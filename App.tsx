import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Text, View} from 'react-native';
import apollo from './src/apollo';
import TodoForm from './src/TodoForm';
import TodoList from './src/TodoList';

const App: React.FC = () => (
  <ApolloProvider client={apollo}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TodoForm />
      <View style={{height: 20}} />
      <TodoList />
    </View>
  </ApolloProvider>
);

export default App;
