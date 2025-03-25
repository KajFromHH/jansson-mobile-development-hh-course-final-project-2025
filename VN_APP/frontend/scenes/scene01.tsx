import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene01 from '../assets/images/scene01.svg';
import { RootStackParamList } from "../components/types";
import { mainStyle } from "../styles/mainStyle";

type scene01Props = NativeStackScreenProps<RootStackParamList, 'scene01'>;

export default function scene01({ navigation }: scene01Props) {
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
                onPress={() => navigation.navigate('scene02')}
            >
                <Text style={mainStyle.buttonText}>
                    New game!
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}