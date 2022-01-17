import * as Font from "expo-font";

export default useFonts = async () => {
    await Font.loadAsync({
        "Orbitron-Regular": require("./assets/fonts/Orbitron-Regular.ttf"),
    });
};
