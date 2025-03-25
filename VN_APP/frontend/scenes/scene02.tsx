import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene02 from '../assets/images/scene02.svg';
import { RootStackParamList } from "../components/types";
import { mainStyle } from "../styles/mainStyle";

type scene02Props = NativeStackScreenProps<RootStackParamList, 'scene02'>;

export default function scene02({ navigation }: scene02Props) {
    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>
                Once upon a time there was a coder...
            </Text>
            <Scene02
                style={mainStyle.image}
            />
            <Pressable
                style={mainStyle.button}
                onPress={() => navigation.navigate('scene03')}
            >
                <Text style={mainStyle.buttonText}>
                    Next...
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}