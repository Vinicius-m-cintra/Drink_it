import React from 'react';
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles';

function Selectable({text, onSelect}) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect()}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Selectable;