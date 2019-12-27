import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.Headercontainer}>
      <Text style={styles.Headertext}>My TodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    Headercontainer: {
        marginTop: 50,
        marginBottom: 50,
        color: 'white',
    },

    Headertext: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',
    }

  });