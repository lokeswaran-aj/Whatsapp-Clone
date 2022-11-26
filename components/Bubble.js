import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Bubble = (props) => {
    const { text, type } = props;
    const bubbleStyle = { ...styles.container };
    const textStyle = { ...styles.text };

    switch (type) {
        case "system":
            textStyle.color = "#65644a";
            bubbleStyle.backgroundColor = colors.beige;
            bubbleStyle.marginTop = 10;
            bubbleStyle.alignItems = "center";

            break;

        default:
            break;
    }
    return (
        <View style={styles.wrapperStyle}>
            <View style={bubbleStyle}>
                <Text style={textStyle}>{text}</Text>
            </View>
        </View>
    );
};

export default Bubble;

const styles = StyleSheet.create({
    wrapperStyle: {
        flexDirection: "row",
        justifyContent: "center",
    },
    container: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        borderColor: "#E2DACC",
        borderWidth: 1,
        marginBottom: 10,
    },
    text: {
        fontFamily: "regular",
        letterSpacing: 0.3,
    },
});
