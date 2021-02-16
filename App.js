import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Switch } from 'react-native';
import NumericalDie, { ActionDie } from './components/Die'
import { randomBoolean, randomCastle, randomDieNumber, roll, rollRed }  from './utils/utils.tsx'

export default function App() {
  let [red, setRed] = useState(randomDieNumber());
  let [yellow, setYellow] = useState(randomDieNumber());
  let [ship, setShip] = useState(randomBoolean());
  let [castle, setCastle] = useState(randomCastle());
  let [citiesAndKnights, setCitiesAndKnights] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableHighlight onPress={() => rollRed({setRed})} underlayColor='#68a0cf'>
          <NumericalDie key={Math.random()} backgroundColor='red' value={red} duration={250} />
        </TouchableHighlight>
        <NumericalDie key={Math.random()} backgroundColor='yellow' value={yellow} duration={250} />
      </View>

      {
        citiesAndKnights &&
        <ActionDie key={Math.random()} ship={ship} backgroundColor={castle} duration={250} />
      }

      <TouchableHighlight>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10}}>
          <Switch value={citiesAndKnights} onValueChange={setCitiesAndKnights}></Switch>
          <Text style={{marginLeft: 20}}>Cities And Knights</Text>
        </View>
      </TouchableHighlight>
      
      <View style={[styles.rollButton, {backgroundColor: 'black'}]}>
        <Text style={[styles.sumText]}>{red + yellow}</Text>
      </View>

      <TouchableHighlight
        style={styles.rollButton}
        onPress={() => roll({setRed, setYellow, setShip, setCastle, citiesAndKnights})}
        underlayColor='#fff'>
          <Text style={[styles.rollText]}>Roll</Text>
      </TouchableHighlight>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  rollButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'stretch',
  },
  rollText:{
    fontSize: 25,
    color:'#fff',
    textAlign:'center',
  },
  sumText:{
    fontSize: 35,
    color:'#fff',
    textAlign:'center',
  },
  catanModeSwitch: {
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    margin: 10
  }
});
