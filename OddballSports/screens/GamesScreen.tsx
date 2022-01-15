import { StyleSheet, ActivityIndicator, FlatList, SafeAreaView, ScrollView, RefreshControl, StatusBar, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, View } from '../components/Themed';
import {RootTabScreenProps} from "../types";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import Constants from 'expo-constants';

const url = process.env.ABC_SCOREBOARD_URL;

export const Post = props => (
    <View>
      <Text>...</Text>
      {props.enableComments && <Comments />}
    </View>
);

Post.defaultProps = {
  enableComments: process.env.EXPO_COOLAPP_COMMENTS === 'true' || false,
};

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.vs}</Text>
      <Text style={[styles.info, textColor]}>{item.date}, {item.time}, {item.venue}, {item.court}</Text>
    </TouchableOpacity>
);

export default function GamesScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
        />
    );
  };
  const getGames = async () => {
    try {
      const response = await fetch(url + 'game/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.ABC_SCOREBOARD_KEY,
      }
    });
    const json = await response.json();
    setData(json.games);
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setLoading(false);
    }
  };

  let [fontsLoaded] = useFonts({
    'LuckiestGuy-Regular': require('../assets/fonts/LuckiestGuy-Regular.ttf'),
  });


  useEffect(() => {
    getGames();
  }, []);

  // build game info for display
  const gameKeys = Object.keys(data);
  console.log(gameKeys);
  let games = [];
  for (let id in data) {
     games.push({
      "id": id,
      "date": String(data[id]['time_scheduled']).substring(0, 10),
      "time": String(data[id]['time_scheduled']).substring(11, 16),
      "venue": data[id]['venue'],
      "court": data[id]['court'],
      "vs": data[id]['team_a'] + ' vs ' + data[id]['team_b']
    })
  }

  console.log(games);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'LuckiestGuy-Regular', fontSize: 40 }}>OddballSports</Text>
          <Text style={{ fontSize: 40 }}>Games</Text>
          {isLoading ? <ActivityIndicator/> : (
              <SafeAreaView style={styles.container}>
                <ScrollView
                  contentContainerStyle={styles.scrollView}
                  refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                  }
                  >
                    <FlatList
                        data={games}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        extraData={selectedId}
                    />
                </ScrollView>
              </SafeAreaView>
          )}
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 20
  },
  lucky: {
    fontSize: 20,
    fontFamily: 'LuckiestGuy-Regular',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
