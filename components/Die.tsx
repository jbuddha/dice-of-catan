import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { randomDieNumber } from '../utils/utils';


const checkVisibility = (value=9, index: number) => {
    switch (value) {
        case 1:
            return index == 5;
        case 2:
            return index == 4 || index == 6;
        case 3:
            return index == 3 || index == 5 || index == 7;
        case 4:
            return index == 1 || index == 3 || index == 7 || index == 9;
        case 5:
            return index == 1 || index == 3 || index == 5 || index == 7 || index == 9;
        case 6:
            return index == 1 || index == 2 || index == 3 || index == 7 || index == 8 || index == 9;
        case 7:
            return index == 1 || index == 2 || index == 3 || index == 5 || index == 7 || index == 8 || index == 9;
        case 8:
            return index == 1 || index == 2 || index == 3 || index == 4 || index == 6 || index == 7 || index == 8 || index == 9;
        case 9:
            return true;
    }
}

// const animations = ['shake', 'swing', 'wobble', 'bounce'];
const animations = ['swing'];

const randomAnimation = () => {
    let index = Math.floor(Math.random() * animations.length);
    return animations[index];
}

export default function NumericalDie({ backgroundColor = 'red', value=1, duration=0 }) {
    let index = 1;

    return (
        <Animatable.View animation={randomAnimation()} 
            duration={duration} easing='linear' style={[styles.die, { backgroundColor }]}>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
            </View>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
            </View>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
                <View style={[styles.dot, { opacity: checkVisibility(value, index++) ? 1 : 0} ]} />
            </View>
        </Animatable.View>
    );
}

export function ActionDie({ ship=false, backgroundColor='green', duration=0 }) {
    let index = 1;
    let bgColor = ship ? 'white' : backgroundColor;

    return (
        <Animatable.View animation={randomAnimation()} duration={duration} style={[styles.die, { backgroundColor: bgColor }]}>
            {
                ship && <Text style={[styles.actionText]}>⛵️</Text>
            }
            {
                !ship && <Text style={[styles.actionText]}>🏰</Text>
            }
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    die: {
      width: 100,
      height: 100,
      margin: 30,
      flexDirection: 'column',
      borderRadius: 10,
      borderWidth: 2,
      flexBasis: 100,
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    dot: {
        borderRadius: 12,
        borderWidth: 1,
        width: 24,
        height: 24,
        backgroundColor: 'white'
    },
    actionText: {
        fontSize: 75,
        textAlign: 'center',
        width: 100
    }
  });
  