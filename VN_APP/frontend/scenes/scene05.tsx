import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene05 from '../assets/images/scene04.svg';
import { RootStackParamList } from "../components/types";
import { mainStyle } from "../styles/mainStyle";

type scene05Props = NativeStackScreenProps<RootStackParamList, 'scene05'>;

export default function scene05({ navigation }: scene05Props) {
    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>
                Ending A: Sickness route.
            </Text>
            <Scene05
                style={mainStyle.image}
            />
            <Pressable
                style={mainStyle.button}
                onPress={() => navigation.navigate('scene01')}
            >
                <Text style={mainStyle.buttonText}>
                    Return to menu ~
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}