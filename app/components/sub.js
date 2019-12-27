import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Sub({title}) {
  return (
    <View style={styles.Subcontainer}>
      <Text style={styles.Subtext}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
    Subtext: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    }

  });