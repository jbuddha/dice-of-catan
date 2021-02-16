import {useEffect, useState} from 'react';
import {generate} from 'shortid';
import { AsyncStorage } from 'react-native'; 

let _rolls, _setRolls;

const HISTORY_KEY = "@CatanDiceRollStore:History";

export const useRolls  = () => {

    if (!_rolls) {
        const {rolls, setRolls} = useState([]);
        _rolls = rolls;
        _setRolls = setRolls;
    } else {
        rolls = _rolls;
        setRolls = _setRolls;
    }

    const loadRolls = async () => {
        const rollData = await AsyncStorage.getItem(HISTORY_KEY);
        if (rollData) {
            const rolls = JSON.parse(rollData);
            setRolls(rolls);
        }
    }

    useEffect(() => {
        if (_rolls && _rolls.length) return;
        loadRolls();
    }, [])

    useEffect(() => {
        AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(_rolls));
    }, [_rolls])

    const addRoll = (red, yellow, ship, castle) => {
        const roll = {id: generate(), red: red, yellow: yellow, ship: ship, castle: castle, timestamp: Date.now()};
        setRolls([roll, ..._rolls.slice(0, 99)]);
    }

    const cleanRolls = async () => {
        setRolls([]);
    }

    return { _rolls, addRoll, cleanRolls };
}