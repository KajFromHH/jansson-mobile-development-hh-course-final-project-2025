import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../components/types";
import { initialState } from "../store/saveSlice";
import { mainStyle } from "../styles/mainStyle";


type mainMenuProps = NativeStackScreenProps<RootStackParamList, 'mainMenu'>;

export default function mainMenu({ navigation }: mainMenuProps) {
    const route = useRoute<RouteProp<RootStackParamList, 'mainMenu'>>();

    return (
        <ImageBackground style={mainStyle.image} source={require('../assets/images/Background.svg')}>
            <SafeAreaView style={mainStyle.container}>
                <Image
                    source={require('../assets/images/Character_happy.svg')}
                    style={mainStyle.character}
                />
                <Text style={mainStyle.text}>
                    Cooking with Katti!
                </Text>


                <Pressable
                    style={mainStyle.button}
                    onPress={() => {
                        navigation.navigate('scene02', { scene: 'scene02', progress: initialState.progress })
                    }}
                >
                    <Text style={mainStyle.buttonText}>
                        New game!
                    </Text>
                </Pressable>
                <Pressable
                    style={mainStyle.button}
                    onPress={() => navigation.navigate('Settings', { scene: 'mainMenu', progress: initialState.progress })}
                >
                    <Text style={mainStyle.buttonText}>
                        Settings
                    </Text>
                </Pressable>
            </SafeAreaView >
        </ImageBackground >
    );
}