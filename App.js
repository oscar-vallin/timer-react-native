import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Timer from './components/Timer';
const App = () => {
  const [start, getStart] = useState(false);
  const label = !start ? "Start" : "Pause";
  return(
    <View style={styles.main}>
      <Button title={label} onPress={() => {getStart(!start)}}/>
      <Timer start={start}/>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 80,
  }
})
export default App;