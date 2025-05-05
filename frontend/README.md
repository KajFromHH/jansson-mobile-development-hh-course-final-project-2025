# Frontend manual.

This is the frontend, and actually the whole and main repository (i.e. code project),
of the VN_APP. 

A) List of languages, tools and libraries.

The mobile app was developed in Typescript with React Native 
and Expo framework.


You can easily get whole list of tools and libraries
via inputing following command in the 
C:\jansson-mobile-development-hh-course-final-project-2025\frontend -directory:

```
npm ls
```

As May 5th 2025, the following tools and libraries were used:

+-- @babel/core@7.26.10

+-- @babel/plugin-proposal-export-namespace-from@7.18.9

+-- @expo/metro-runtime@4.0.1
 = Used for primarily testing android app directly in web browser environment.

+-- @react-native-async-storage/async-storage@1.23.1
 = Used for saving and loading data, especially users' progress in the story.


+-- @react-navigation/native@7.1.6
+-- @react-navigation/native-stack@7.3.10
= Used for specifically navigating all scenes in the application, i.e. reading story scene-by-scene.
Mandatory especially in the main file App.tsx when running the app. Otherwise, the app can't navigate
from scene by scene.

+-- react-native-screens@4.4.0
= used for navigating and managing scenes in the app.


+-- react-native@0.76.9
+-- react-redux@9.2.0
+-- @reduxjs/toolkit@2.7.0
= redux was the solution for managing users' choices and progress, such as saving and loading scene.
The redux is used in ./store/saveSlice.ts, ./store/saveSlice.ts and ./utils/saveAndLoadScene.ts files.

+-- @types/react@18.3.20
= mandatory library for Typescript in order handling and checking all essential variables'
and functions' type. 

+-- expo-audio@0.3.5
= the tool for managing music and sound effects in the app. Before this I used expo-av/audio,
but since it is depracated according to Expo official documents, I had to integrated to recommended
expo-audio.

+-- expo-checkbox@4.0.1
= this is used specifically turning on and off music / sound effects in the app.

+-- expo-status-bar@2.0.1

+-- expo@52.0.46
= the main framework in whole app, especially for android device.

+-- react-dom@18.3.1

+-- react-native-reanimated@3.16.7
= used for simple animations of visual in the app, such as up-and-down movements and alike.

+-- react-native-safe-area-context@4.12.0
= recommended tool for Android devices, so that app will be visible according to Android devices'
screen dimensions. 

+-- react-native-web@0.19.13
+-- react@18.3.1
+-- typescript@5.8.3
`-- vn_app@1.0.0 -> .\

In older version of my app had also the libraries (now unistalled from the app)
+-- react-native-svg-transformer@1.5.0
+-- react-native-svg@15.8.0

= this two libraries for managing all SVG (vector image) files in the app.
Microsoft Co-pilot recommended vector images for better performance in the Android device.
However, this two SVG libraries weren't compability for rest of Expo libraries and Typescript,
causing more unpexpected errors than default PNG image files. Due errors, I made decision to
uninstall this libraries.


B) Known issues technical problems:

1) There is problems in /android directory with following error message:

"The supplied phased action failed with an exception.
A problem occurred configuring root project 'VN_APP'.
A problem occurred evaluating root project 'VN_APP'.
Failed to apply plugin 'com.facebook.react.rootproject'.
A problem occurred configuring project ':app'.
SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at 
'C:\...\jansson-mobile-development-hh-course-final-project-2025\frontend\android\local.properties'."

According to Microsoft Co-pilot, this error message means 
that my Windows workstation doesn't know where the Android SDK.
This is a requirement for native builds such as EAS Build
or running npx react-native run-android.

It is similar like in my Software Development course,
when I need specify JAVA_HOME environment variables
to absolutely correct path for installed Java in each 
our workstations. Otherwise, our Java with Gradle -backend
can't never able to build an java jar in the workstations.

However, since I'm already testing my app functionality
in my Android phone (Samsung Galaxy A20 model) and 
Android SDK is NOT required for enabling app to work 
in Android devices, I didn't see a need to fix this problem now.

---

2) The music doesn't looping after waiting or idling in same scene.

This is known restriction with the current version of Expo Audio library.

The Ovani royalty-free 'Synthpop_Free_Java_Cut_30_Ovani.wav
is pre-cut as 30 second soundtrack.

However, the useEffect for gameMusic.play() in AudioContext.tsx
is not a reactive state, thus React doesn't re-run the music until
something is changed in the useEffect, such as on or off music in
the checkbox, according the Microsoft Co-Pilot.

Expo Audio does expose loop, but after testing gameMusic.loop,
nothing changed.

Microsoft Co-Pilot recommended to use looping method (i.e. isLooping)
by expo-av. Since expo-av audio is considered depracated
by the official Expo documentation, I decided not use Co-pilot's solution
into my app.

In summary, since current version of Expo Audio has no looping methods,
the music will not loop in the current version of VN_APP.

One thing that I noticed, that the music will loop again after 
returning to Main menu screen. The music doesn't loop if one waits 
or idles for about a minute in same screen.

---

3) When saving at Scene03, my choice is not saved correctly.

True. I tried a another technical bug when it came to managing user choices.
User choice in scene02 (i.e. Pie or Cake) is handled the handleChoices method of scene02.tsx:

´´´
//scene02.tsx (NEW)

    const handleChoices = (selectedChoice: string) => {
        const currentScene = route.params.scene;

        const updatedChoice = {
            ...route.params.progress.choicesMade,
            [currentScene]: selectedChoice
        }

        const updateUserChoices: ProgressData = {
            ...route.params.progress,
            choicesMade: updatedChoice
        };
        saveScene(route.params.scene, updateUserChoices);
        navigation.navigate('scene03', { scene: 'scene03', progress: updateUserChoices })

    }
´´´

where choiceMade (in types.ts) is a structured type consisting
the id of Scene (string) where choice made and the choice itself (string),
in this case "Cake" or "Pie".

In other words,
```
//types.ts (NEW)
export type ProgressData = {
    textRead: number;
    choicesMade: { [sceneId: string]: string };
};
```
will be updated in Scene02.tsx as " choicesMade: {[sceneId : "scene02"]: "Cake"}.

The new type structure of choicesMade was suggested by Microsoft Co-pilot,
in order solving a problem in the older version of handleChoices method:

```
//scene02.tsx (OLD)
   const handleChoices = (selectedChoice: string) => {
         const updateUserChoices: ProgressData = {
             ...route.params.progress,
             choicesMade: [...route.params.progress.choicesMade, selectedChoice]
         };
         saveScene(route.params.scene, updateUserChoices);
         navigation.navigate('scene03', { scene: 'scene03', progress: updateUserChoices })
 
     }
```
with old type structure of choicesMade:
```
//types.ts

export type ProgressData = {
     textRead: number;
     choicesMade: string[];
 }

```
where choicesMade will appended with new choices in scene02.tsx, i.e. choicesMade["Pie", "Cake", "Cake", ...].

Both have its own plus and minus.

The new solution is more precise and controlled on what scene has choicesMade been updated and what value. Thus calling it on e.g. scene04.tsx with {route.params.progress.choicesMade['scene02']}.

This is great solution in scenarios, when user saves at Scene02.tsx 
and loads back to Scene02.tsx from Scene04.tsx in order to change their choices.
However, there is technical bug, that if user instead saves at scene03.tsx 
and returns back to endingA.tsx, the choice is no more saved. This is due
that initialState of Redux saveSlice.tsx (which handles saving and loading progress)
is default empty or zero:

```
//saveSlice.tsx
export const initialState: GameData = {
    scene: '',
    progress: {
        textRead: 0,
        choicesMade: {},
    },
};
```
This could causing problem when trying return to any other scenes after scene02.

Meanwhile the old version had more persistent on remembering the choicesMade.
Calling it via route.params.progress.choicesMade[0] in Scene04, it will always
present the first made choice from user in every saving and loading scenes.
In other words, it is "hard saved" which again has own problems.

In the old solution, all new choices -values from Scene02.tsx will only appended to the
choicesMade array. This means, if user returns to scene02 from EndingA and their first choice
was "Cake", the "Cake" string will always be shown in scene04 and EndingA even if user
changed recently their choice to "Pie".

According to Co-pilot, managing the choices with save & load functionality is one of the most
common and difficult bugs to fix in Visual Novels.

In summary, the new solution must be fixed in future.
