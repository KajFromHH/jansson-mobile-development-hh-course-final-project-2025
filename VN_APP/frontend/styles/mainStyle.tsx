import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 36,
        color: 'black'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        backgroundColor: 'pink',

    },
    buttonText: {
        fontSize: 28,
        color: 'black'
    },
    image: {
        flex: 1,
        width: '100%'
    }

});