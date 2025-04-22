import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene05 from '../assets/images/scene05.svg';
import { RootStackParamList } from "../components/types";
import { mainStyle } from "../styles/mainStyle";


type scene05Props = NativeStackScreenProps<RootStackParamList, 'scene05'>;

export default function scene05({ navigation }: scene05Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'scene05'>>();

    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>
                Ending A: Sickness route.
                You are not a {route.params.progress.choicesMade[0]} ...
            </Text>
            <Scene05
                style={mainStyle.image}
            />
            <Pressable
                style={mainStyle.button}
                onPress={() => navigation.navigate('mainMenu', { scene: 'mainMenu', progress: route.params.progress })}
            >
                <Text style={mainStyle.buttonText}>
                    Return to menu ~
                </Text>
            </Pressable>
            <Pressable
                style={mainStyle.button}
                onPress={() => navigation.navigate('Settings', { scene: route.params.scene, progress: route.params.progress })}
            >
                <Text style={mainStyle.buttonText}>
                    Settings
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}