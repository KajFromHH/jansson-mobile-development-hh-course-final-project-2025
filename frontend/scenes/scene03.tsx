import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Pressable, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { mainStyle } from "../styles/mainStyle";
import { RootStackParamList } from "../types";

type scene03Props = NativeStackScreenProps<RootStackParamList, 'scene03'>;

export default function scene03({ navigation }: scene03Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'scene03'>>();
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
                        Right! Katti adds salt, sugar, milk, flour and...
                    </Text>

                    <Image
                        style={mainStyle.characterMenu}
                        source={require("../assets/images/Character_happy.png")}
                        resizeMode="contain"
                    />
                    <Pressable
                        style={mainStyle.button}
                        onPress={() => {
                            playButtonSound();
                            navigation.navigate('scene04', { scene: 'scene04', progress: route.params.progress })
                        }}
                    >

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