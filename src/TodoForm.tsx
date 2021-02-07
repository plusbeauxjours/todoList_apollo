import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default () => {
  const [content, setContent] = useState<string>(null);

  const onPress = () => {
    setContent(null);
  };
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder={'CONTENT'}
        style={{fontSize: 12}}
        placeholderTextColor={'#aaa'}
        onChangeText={(text) => setContent(text)}
        value={content}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: 30,
          width: 200,
          borderWidth: 2,
          borderColor: '#2c6868',
          borderRadius: 10,
        }}
      />
      <View style={{height: 20}} />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 30,
          width: 200,
          borderWidth: 2,
          borderColor: '#2c6868',
          borderRadius: 10,
        }}
        onPress={() => onPress()}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};
