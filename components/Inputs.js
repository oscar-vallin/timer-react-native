import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Inputs = props => (
  <View style={styles.main}>
    <TextInput 
    onChangeText={props.handler('minu')}
    value={props.minu}
    style={styles.inputs}
    placeholder="minute"
    keyboardType="numeric"/>
    <TextInput 
    onChangeText={props.handler('seco')}
    value={props.seco}
    style={styles.inputs}
    placeholder="second"
    keyboardType="numeric"/>
  </View>
);
const styles = StyleSheet.create({
  main : {
    marginVertical: 10,
  },
  inputs: {
    borderWidth: 2,
    paddingHorizontal: 35,
     paddingVertical: 5,
     marginTop: 10,
     borderRadius: 6,
     borderColor: 'blue',
     marginBottom: 13,
  }
})
export default Inputs;