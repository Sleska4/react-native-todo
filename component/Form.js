import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function Form({addTodo}) {

  const [textInput, useTextInput] = useState('');
  const onSubmite = () => {
      addTodo({text: textInput, id: Math.random()});
      useTextInput('')
  }

  return (
    <View style={styles.div}>
        <TextInput
            onSubmitEditing={() => onSubmite()}
            style={styles.input}
            onChangeText={useTextInput}
            placeholder="Введите Текст"
            value={textInput}
            />
            <View style={styles.btn}>
            <Button
                style={styles.div, styles.btn}
                title="Press me"
                onPress={() => onSubmite()}
            />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    div: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        width: '70%',
        height: 38,
        borderWidth: 1,
        paddingLeft: 10,
        backgroundColor: '#FFF'
    },
    btn: {
        width: '30%',
        height: 38,
    }
});