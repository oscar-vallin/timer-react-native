import React from 'react';
import {Text} from 'react-native';

const Time = ({seco,minu}) => (
  <Text style={{fontSize: 20, textAlign: 'center'}}>
    {("0"+minu).slice(-2)}:
    {("0"+seco).slice(-2)}
  </Text>
) 
export default Time;