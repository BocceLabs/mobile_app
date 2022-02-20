// part 1 - imports
import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import SoundIcon from "./SoundIcon";
import BocceFrameSingle from "./BocceFrameSingle";

// part 2 - create a component
const Sounds = () => {

  const sounds = [
    {emoji: '🗑️', soundAsset: [require('../../assets/thatsamiss.m4a'),
        require('../../assets/sorrypleasetryagain.m4a'),
        require('../../assets/justabitoutside.m4a'),
        require('../../assets/prettygoodbutwillneedbetter.m4a'),
        require('../../assets/dontworryyoureveryspecial.m4a'),
        require('../../assets/youredoinggreatbutthatsnotin.m4a')]},
    {emoji: '✅️', soundAsset: [require('../../assets/allthefeels.m4a'),
        require('../../assets/ballinballinballin.m4a'),
        require('../../assets/butterybiscuit.m4a'),
        require('../../assets/letsgooooo.m4a'),
        require('../../assets/thatdogllhunt.m4a'),
        require('../../assets/youregonnalikethewayyoulook.m4a')]},
    {emoji: '🌭', soundAsset: [require('../../assets/littlemoremustard.m4a')] },
    {emoji: '🍝', soundAsset: [require('../../assets/themeatballneedsmoremarinara.m4a')] },
    {emoji: '🍞', soundAsset: [require('../../assets/gonnaneedsomewheaties.m4a')] },
    {emoji: '🍣', soundAsset: [require('../../assets/toomuchtuna.m4a')] },
    {emoji: '🏎️', soundAsset: [require('../../assets/slowdownspeedracer.m4a')] },
    {emoji: '🌶️', soundAsset: [require('../../assets/oooitssospicy.m4a')] },
    {emoji: '🕰️', soundAsset: [require('../../assets/caddyshack_waiting.mp3')]},
    {emoji: '💋', soundAsset: [require('../../assets/kissykissy.m4a')]},
    {emoji: '🎰', soundAsset: [require('../../assets/slot-machine-sound-effect.mp3')]},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.soundIcon}>🔊</Text>
      <FlatList
        horizontal
        style={styles.flatList}
        data={sounds}
        keyExtractor={(item) => item.emoji}
        renderItem={({ item }) => {
          return <SoundIcon
            emoji={item.emoji}
            soundAssets={item.soundAsset}
          />;
        }}
      />
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  soundIcon: {
    fontSize: 60,
    padding: 5
  },
  flatList: {
    backgroundColor: 'white',
    borderRadius: 10

  }
});

// part 4 - export the component
export default Sounds;