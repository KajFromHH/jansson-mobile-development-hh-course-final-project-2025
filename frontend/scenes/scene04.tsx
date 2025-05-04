import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Pressable, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { mainStyle } from "../styles/mainStyle";
import { RootStackParamList } from "../types";

type scene04Props = NativeStackScreenProps<RootStackParamList, 'scene04'>;

export default function scene04({ navigation }: scene04Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'scene04'>>();
    const { playButtonSound } = useAudio();

    return (
        <SafeAreaProvider>

            <SafeAreaView style={mainStyle.container}>
                <ImageBackground
                    source={require("../assets/images/Background.png")}
                    style={mainStyle.background}
                    resizeMode="cover"
                >

                    <Text style={mainStyle.text}>
                        Oh no! The milk was expired by an year! Now our ... is ruined! So sad!
                    </Text>

                    <Image
                        style={mainStyle.characterMenu}
                        source={require("../assets/images/Character_happy.png")}
                        resizeMode="contain"
                    />
                    <Pressable
                        style={mainStyle.button}
                        onPress={() => {
                            navigation.navigate('endingA', { scene: 'endingA', progress: route.params.progress })
                            playButtonSound();
                        }}>
                        <Text style={mainStyle.buttonText}>
                            Next...
                        </Text>
                    </Pressable>
                    <Pressable
                        style={mainStyle.button}
                        onPress={() => {
                            navigation.navigate('Settings', { scene: route.params.scene, progress: route.params.progress })
                            playButtonSound();
                        }}
                    >
                        <Text style={mainStyle.buttonText}>
                            Settings
                        </Text>
                    </Pressable>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}