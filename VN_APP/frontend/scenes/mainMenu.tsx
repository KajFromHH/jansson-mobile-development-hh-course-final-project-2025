import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene01 from '../assets/images/scene01.svg';
import { RootStackParamList } from "../components/types";
import { initialState } from "../store/saveSlice";
import { mainStyle } from "../styles/mainStyle";


type mainMenuProps = NativeStackScreenProps<RootStackParamList, 'mainMenu'>;

export default function mainMenu({ navigation }: mainMenuProps) {
    const route = useRoute<RouteProp<RootStackParamList, 'mainMenu'>>();

    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>
                VN-APP
                The inspiring coder!
            </Text>
            <Scene01
                style={mainStyle.image}
            />
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
        </SafeAreaView>
    );
}