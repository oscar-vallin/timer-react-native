import React,{useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert, KeyboardAvoidingView, Vibration} from 'react-native';
import Time from './Time';
import Inputs from './Inputs';
import Reset from './Reset';
const Timer = ({start}) => {
  const [minute, getMinute] =useState(0);
  const [secon, getSecon] =useState(6);
  const [change, getChange] =useState(false);
  const [validForm, getValidForm] =useState(true);
  const [time, getTime] =useState({minu: '', seco: ''});
  const {minu, seco} = time;

  useEffect(() => {
    if(start){
      const interval = setInterval(runTime, 1000);
      return () => clearInterval(interval);
    }
    if(minu !== '' || seco !== '') return getValidForm(false)
  },undefined);

  const runTime = () => {
    if(minute > 0 && secon === 0){
      getMinute(prevState => prevState-1);
      getSecon(59);
    }else if(minute === 0 && secon === 0){
        Vibration.vibrate([500, 500, 500])
      if(!change){
        startBreack()
        getChange(!change);
      }else{
        startWork()
        getChange(!change);
      }
    }else{
      getSecon(prevState => prevState-1);
    }
  }
  const startWork = () => {getMinute(0), getSecon(10)}
  const startBreack = () => {getMinute(0), getSecon(5)}
  const reset = () => change ? startBreack() : startWork();
  const getHandler = key => val => getTime({...time, [key]: val});  
  const validSubmit = () => {
    if(+minu > 60 || +seco > 60){
      Alert.alert("Error", "cannot be greater than 60",[
        {text: 'Understood', onPress: () => console.log("Alert closed")}
      ])
    }else{
      getMinute(+minu);
      getSecon(+seco);
    }
    getTime({minu: '', seco: ''});
    getValidForm(true);
  }
  return(
    <KeyboardAvoidingView style={styles.main}>
      <Text style={styles.text}>{!change ? "Start Work":"Take a Break"}</Text>
      <Time seco={secon} minu={minute}/>
      <Inputs handler={getHandler} minu={minu} seco={seco}/>
      {start ? <Reset res={reset}/> 
      : <Button title="Another Time" onPress={validSubmit} disabled={validForm}/>}
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 15
  }
})
export default Timer;