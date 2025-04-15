//This is a React Navigation used for
// type-check screens and their params.

//This provides better intelliSense 
//and type safety.

//Source: https://reactnavigation.org/docs/typescript/?config=dynamic

export type ProgressData = {
    textRead: number;
    choicesMade: string[];
}
export type GameData = {
    scene: string;
    progress: ProgressData;
}

export type RootStackParamList = {
    scene01: { scene: string; progress: ProgressData };
    scene02: { scene: string; progress: ProgressData };
    scene03: { scene: string; progress: ProgressData };
    scene04: { scene: string; progress: ProgressData };
    scene05: { scene: string; progress: ProgressData };
    Settings: { scene: string; progress: ProgressData };
}