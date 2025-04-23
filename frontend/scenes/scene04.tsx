import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene04 from '../assets/images/scene04.svg';
import { RootStackParamList } from "../components/types";
import { mainStyle } from "../styles/mainStyle";
import { RouteProp, useRoute } from "@react-navigation/native";


type scene04Props = NativeStackScreenProps<RootStackParamList, 'scene04'>;

export default function scene04({ navigation }: scene04Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'scene04'>>();

    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>
                But then one day, he got a very bad food poison.
                Thus he couldn't work with the application.
            </Text>
            <Scene04
                style={mainStyle.image}
            />
            <Pressable
                style={mainStyle.button}
                onPress={() => navigation.navigate('scene05', { scene: 'scene05', progress: route.params.progress })}
            >
                <Text style={mainStyle.buttonText}>
                    Next...
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