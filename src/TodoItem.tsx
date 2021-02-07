import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Todo, deleteTodo} from './store';

interface IProps {
  todo: Todo;
}

export default ({todo}): React.FC<IProps> => {
  const removeContentFn = () => {
    deleteTodo(todo.id);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        paddingHorizontal: 10,
        marginVertical: 10,
      }}>
      <Text style={{color: 'red', fontSize: 16}}>{todo.content}</Text>
      <TouchableOpacity onPress={() => removeContentFn()}>
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  );
};
