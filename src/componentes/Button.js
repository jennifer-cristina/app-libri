import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../const/Colors";

const Button = ({title, onPress = () => {}}) => {

    return (
        <TouchableOpacity 
            style={estilos.button} 
            activeOpacity={0}
            onPress={onPress}>
            <Text style={estilos.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    button: {
        height: 55,
        width: "100%",
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    title: {
        color:COLORS.black,
        fontWeight: "bold",
        fontSize: 18, 
    },
});

export default Button;