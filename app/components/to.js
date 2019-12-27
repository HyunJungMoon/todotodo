import React from 'react';
import {TextInput, View, StyleSheet, TextInput} from 'react-native';

export default function Iput({value, changText, addTodoItem}) {
  return (
    <TextInput
    value={value}
    changText={changText}
    addTodoItem={addTodoItem}

    style={StyleSheet.to}
    placeholder={"할 일을 입력해주세요."}
    maxLength={30}
    returnKeyType="done"/>
  
  );
}


const styles = StyleSheet.create({
    to: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20,
    },

});
