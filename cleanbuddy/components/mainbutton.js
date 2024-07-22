import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Button = (props) => {
    const textColor = props.filled ? Colors.text : Colors.text;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: Colors.green },
                ...props.style,
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 16, marginTop: 5, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
})
export default Button
