import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Pressable, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { mainStyle } from "../styles/mainStyle";
import { RootStackParamList } from "../types";

type endingAProps = NativeStackScreenProps<RootStackParamList, 'endingA'>;

export default function endingA({ navigation }: endingAProps) {
    const route = useRoute<RouteProp<RootStackParamList, 'endingA'>>();
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
                        Ending ...! Poison ...
                    </Text>

                    <Image
                        style={mainStyle.characterMenu}
                        source={require("../assets/images/Character_sad.png")}
                        resizeMode="contain"
                    />
                    <Pressable
                        style={mainStyle.button}
                        onPress={() => {
                            playButtonSound();
                            navigation.navigate('mainMenu', { scene: 'mainMenu', progress: route.params.progress })
                        }}
                    >
                        <Text style={mainStyle.buttonText}>
                            Return to menu ~
                        </Text>
                    </Pressable>
                    <Pressable
                        style={mainStyle.button}
                        onPress={() => {
                            playButtonSound();
                            navigation.navigate('Settings', { scene: route.params.scene, progress: route.params.progress })
                        }}
                    >
                        <Text style={mainStyle.buttonText}>
                            Settings
                        </Text>
                    </Pressable>
                </ImageBackground>
            </SafeAreaView >
        </SafeAreaProvider>
    );
}