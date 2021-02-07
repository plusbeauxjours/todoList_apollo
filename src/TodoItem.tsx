import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default (): React.FC => {
  const removeContentFn = () => {};

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        marginVertical: 5,
      }}>
      <Text>CONTENT</Text>
      <TouchableOpacity onPress={() => removeContentFn()}>
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  );
};
