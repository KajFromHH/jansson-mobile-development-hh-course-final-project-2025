import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Pressable, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ProgressData, RootStackParamList } from "../components/types";
import { mainStyle } from "../styles/mainStyle";
import { saveScene } from "../utils/saveAndLoadScene";

type scene02Props = NativeStackScreenProps<RootStackParamList, 'scene02'>;

export default function scene02({ navigation }: scene02Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'scene02'>>();

    const handleChoices = (selectedChoice: string) => {
        const updateUserChoices: ProgressData = {
            ...route.params.progress,
            choicesMade: [...route.params.progress.choicesMade, selectedChoice]
        };
        saveScene(route.params.scene, updateUserChoices);
        navigation.navigate('scene03', { scene: 'scene03', progress: updateUserChoices })

    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={mainStyle.container}>
                <ImageBackground
                    source={require("../assets/images/Background.png")}
                    style={mainStyle.background}
                    resizeMode="cover"
                >

                    <Text style={mainStyle.text}>
                        Help Katti in cooking...
                    </Text>

                    <Image
                        style={mainStyle.characterMenu}
                        source={require("../assets/images/Character_happy.png")}
                        resizeMode="contain"
                    />

                    <Pressable
                        style={mainStyle.button}
                        onPress={() => handleChoices("Cake")}
                    >
                        <Text style={mainStyle.buttonText}>
                            Cake
                        </Text>
                    </Pressable>

                    <Pressable
                        style={mainStyle.button}
                        onPress={() => handleChoices("Pie")}
                    >
                        <Text style={mainStyle.buttonText}>
                            Pie
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

                </ImageBackground >
            </SafeAreaView>
        </SafeAreaProvider >
    );
}