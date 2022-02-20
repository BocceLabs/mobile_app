// part 1 - imports
import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

// part 2 - create a component
const SoundIcon = ( {emoji, soundAssets} ) => {

  const [sound, setSound] = useState(null);

  const playSound = async () => {
    console.log('Loading Sound');
    let randomSoundAsset = soundAssets[Math.floor(Math.random()*soundAssets.length)];
    const { sound } = await Audio.Sound.createAsync(randomSoundAsset);
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound ? () => {
      console.log('Unloading Sound');
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

  return (
    <View>
      <TouchableOpacity
        onPress={playSound}
      >
        <Text style={styles.icon}>{emoji}</Text>
      </TouchableOpacity>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
    padding: 4
  }
});

// part 4 - export the component
export default SoundIcon;