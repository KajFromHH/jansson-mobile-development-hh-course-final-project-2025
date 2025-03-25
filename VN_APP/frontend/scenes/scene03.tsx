import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene03 from '../assets/images/scene03.svg';
import { RootStackParamList } from "../components/types";
import { mainStyle } from "../styles/mainStyle";

type scene03Props = NativeStackScreenProps<RootStackParamList, 'scene03'>;

export default function scene03({ navigation }: scene03Props) {
    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>
                Who really, REALLY wanted make a application...
            </Text>
            <Scene03
                style={mainStyle.image}
            />
            <Pressable
                style={mainStyle.button}
                onPress={() => navigation.navigate('scene04')}
            >
                <Text style={mainStyle.buttonText}>
                    Next...
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}