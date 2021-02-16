import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { Text } from 'react-native-animatable';
import { useRolls } from '../hooks';


// class History extends React.Component {
    
export default function History() {
    // const { rolls, addRoll, cleanRolls} = useRolls();

    return (
        <>
            <Text>Some view</Text>
            {/* <FlatList style={styles.container}
                data={rolls}
                renderItem={({item}) => {
                    return (
                        <Text>{`${item.red}, ${item.yellow}`}</Text>
                    )
                }}
            >

            </FlatList> */}
        </>
    );
}    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
    }
});