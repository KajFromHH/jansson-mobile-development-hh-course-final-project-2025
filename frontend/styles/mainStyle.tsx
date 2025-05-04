import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const moddedWidth = width * 100;
const moddedHeight = height * 100;


export const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    section: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    textView: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 36,
        color: 'black',
        textAlign: 'left',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 25,
        borderWidth: 2,
        paddingVertical: 6,
        paddingHorizontal: 10,
        margin: 5,
        backgroundColor: 'orange',

    },
    buttonView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 20,
        backgroundColor: 'pink',

    },
    buttonText: {
        fontSize: 28,
        color: 'black'
    },
    checkbox: {
        margin: 10,
    }
    ,
    checkboxText: {
        fontSize: 20,
        color: 'black'
    },
    image: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    characterMenu: {
        flex: 1,
        top: 100,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    logo: {
        flex: 1,
        marginBottom: '70%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',


    }
});