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
    text: {
        flex: 1,
        fontSize: 36,
        color: 'black',
        alignItems: 'flex-start',

    },
    buttonText: {
        fontSize: 28,
        color: 'black'
    },
    checkboxText: {
        fontSize: 20,
        color: 'black'
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
    checkbox: {
        margin: 10,
    }
    ,
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

        //width: moddedWidth,
        //height: moddedHeight,

        //minHeight: 1920,
        //minWidth: 1080,
        //width: 'auto',
        //height: 'auto',

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
    character: {
        flex: 1,
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