import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Scene02Image from '../assets/images/scene02.svg';
import { upAndDownAnimation } from "../components/Animations";
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
    //upAndDownAnimation is NOT HTML entity, hence no tags <.../>
    return (
        <SafeAreaView style={mainStyle.container}>
            <Text style={mainStyle.text}>
                Once upon a time there was a ...
            </Text>
            {upAndDownAnimation({ svg: Scene02Image, style: mainStyle.image })}

            <Pressable
                style={mainStyle.button}
                onPress={() => handleChoices("Happy coder")}
            >
                <Text style={mainStyle.buttonText}>
                    Happy coder
                </Text>
            </Pressable>

            <Pressable
                style={mainStyle.button}
                onPress={() => handleChoices("Cool coder")}
            >
                <Text style={mainStyle.buttonText}>
                    Cool coder
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