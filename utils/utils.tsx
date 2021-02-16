import soundLibrary from '../components/SoundLibrary'
import { Audio } from 'expo-av';

import * as Speech from 'expo-speech';

export const randomDieNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
}

export const randomBoolean = () => {
  return Math.random() < 0.5;
}

const castles = ['green', 'yellow', 'blue'];
   
export const randomCastle = () => {
  return castles[Math.floor(Math.random() * castles.length)];
}

const sounds = [new Audio.Sound(), new Audio.Sound(), new Audio.Sound(), new Audio.Sound(), new Audio.Sound()];

const randomSound = async () => {
  try {
    let index = Math.floor(Math.random() * sounds.length);
    let sound = sounds[index];
    if (!(await sound.getStatusAsync()).isLoaded) {
      await sound.loadAsync(soundLibrary[index]);
    }
    await sound.replayAsync();
  } catch (error) {
    // An error occurred!
    console.error(error);
  }
}

const speak = (text: string) => {
  Speech.speak(text);
};

export const roll = async ({setRed = (f: any) => f, setYellow = (f: any) => f, setShip = (f: any) => f, setCastle = (f: any) => f, citiesAndKnights = true}) => {
  randomSound();
  let red = randomDieNumber();
  let yellow = randomDieNumber();
  setRed(red);
  setYellow(yellow);

  if (citiesAndKnights) {
    let ship = randomBoolean();
    let castle = randomCastle();
    setShip(ship);
    setCastle(castle);

    if (ship) {
        speak(`${(red+yellow).toString()} and Ship`);
    } else {
        speak(`${(red+yellow).toString()} and ${castle}`);
    }
  } else {
    speak((red+yellow).toString());
  }
  
}

export const rollRed = async ({setRed = (f: any) => f}) => {
    randomSound();
    let red = randomDieNumber();
    setRed(red);
    speak(`${(red).toString()} on red`);
  }