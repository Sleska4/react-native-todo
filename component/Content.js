import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';

export default function Content({el, del}) {

  return (
    <TouchableWithoutFeedback 
        onPress={() => del(el.id)}
    >
        <Text style={styles.text}>{el.text}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 'auto',
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    width: 230,
  },

});