import React from 'react';
import { Text, View,Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vextor-icons";

export default function Listen({name, isComplete, changeComplete}) {
    return (
        <View style={styles.lisyitembox}>
            <View style={styles.makerow}>
                <TouchableOpacity onPress={changeComplete}>
                    <AntDesign name={isCompete? "changesircle": 'frowno'}
                    size={20} style={checkmargin}/>
                </TouchableOpacity>

                <Text style={styles.Subtext}>{title}</Text>
            </View>
            <TouchableOpacity onPress={deleteitem}>
                <AntDesign name={"checkcircle"} size={20} />
            </TouchableOpacity>
        </View>
    );
};

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    
    lisyitembox: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    }

  });