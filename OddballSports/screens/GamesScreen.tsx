import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get("window");
import React, { useEffect, useState } from 'react';
import { Text, View } from '../components/Themed';
import {RootTabScreenProps} from "../types";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
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
      <Text style={[styles.teamvs, textColor]}>{item.vs}</Text>
      <Text style={[styles.gameinfo, textColor]}>{item.date}, {item.time}, {item.venue}, {item.court}</Text>
    </TouchableOpacity>
);

const SelectDropdownNew = ({ initialValue, iconText, leaguesWithLogos} ) => (
    <SelectDropdown
        data={leaguesWithLogos}
        // defaultValueByIndex={1}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonStyle={styles.dropdown3BtnStyle}
        renderCustomizedButtonChild={(selectedItem, index) => {
          return (
              <View style={styles.dropdown3BtnChildStyle}>
                {selectedItem ? (
                    <Image
                        source={selectedItem.image}
                        style={styles.dropdown3BtnImage}
                    />
                ) : (
                    <Ionicons name={iconText} color={"#444"} size={32} />
                )}
                <Text style={styles.dropdown3BtnTxt}>
                  {selectedItem ? selectedItem.title : "Select " + initialValue}
                </Text>
                <FontAwesome name="chevron-down" color={"#444"} size={18} />
              </View>
          );
        }}
        dropdownStyle={styles.dropdown3DropdownStyle}
        rowStyle={styles.dropdown3RowStyle}
        renderCustomizedRowChild={(item, index) => {
          return (
              <View style={styles.dropdown3RowChildStyle}>
                <Image source={item.image} style={styles.dropdownRowImage} />
                <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
              </View>
          );
        }}
    />
);

export default function GamesScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  // dropdown filters
  const leagueIconText = "people-outline";
  const leagueInitialValue = "league";
  const leaguesWithLogos = [
    { title: "abc_boise" },//, image: require("./images/abc.png")},
    { title: "abc_chicago" },//, image: require("./images/abc.png")},
    { title: "abc_seattle" },//, image: require("./images/abc.png")},
    { title: "highwood_chicago" },//, image: require("./images/highwood.png")}
  ];
  const seasonIconText = "partly-sunny-outline";
  const seasonInitialValue = "season";
  const seasonsWithLogos = [
    { title: "2022_s1" },//, image: require("./images/abc.png")},
    { title: "2022_s2" },//, image: require("./images/highwood.png")}
  ];
  const venueIconText = "beer-outline";
  const venueInitialValue = "venue";
  const venuesWithLogos = [
    { title: "Brickhouse" },//, image: require("./images/highwood.png")}
    { title: "Chicago Distilling Co" },//, image: require("./images/highwood.png")}
    { title: "Chop Shop" },//, image: require("./images/highwood.png")}
    { title: "Cleo's" },//, image: require("./images/abc.png")},
    { title: "Guild Row" },//, image: require("./images/highwood.png")}
    { title: "Time Out Market" },//, image: require("./images/highwood.png")}
    { title: "Tapster" },//, image: require("./images/highwood.png")}
  ];
  const courtIconText = "leaf-outline";
  const courtInitialValue = "court";
  const courtsWithLogos = [
    { title: "1" },//, image: require("./images/highwood.png")}
    { title: "2" },//, image: require("./images/highwood.png")}
    { title: "3" },//, image: require("./images/highwood.png")}
  ];


  const setGame = async (gameId) => {
    setSelectedId(gameId);
    navigation.navigate("Modal", {
      gameId: gameId,
      game: data[gameId],
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.id === selectedId ? "#db89ba" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        <Item
            item={item}
            onPress={() => setGame(item.id)}
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'LuckiestGuy-Regular', fontSize: 40 }}>OddballSports</Text>
          <Text style={{ fontSize: 30 }}>Games</Text>
          <SelectDropdownNew
              initialValue={leagueInitialValue}
              iconText={leagueIconText}
              leaguesWithLogos={leaguesWithLogos} />
          <SelectDropdownNew
              initialValue={seasonInitialValue}
              iconText={seasonIconText}
              leaguesWithLogos={seasonsWithLogos} />
          <SelectDropdownNew
              initialValue={venueInitialValue}
              iconText={venueIconText}
              leaguesWithLogos={venuesWithLogos} />
          <SelectDropdownNew
              initialValue={courtInitialValue}
              iconText={courtIconText}
              leaguesWithLogos={courtsWithLogos} />
          {isLoading ? <ActivityIndicator/> : (
              <SafeAreaView style={{flex: 1}}>
                <FlatList
                    ListHeaderComponent={
                      <>
                        <Text>Results:</Text>
                      </>}
                    data={games}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    extraData={selectedId}/>
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
    marginTop: StatusBar.currentHeight || 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  teamvs: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 20
  },
  gamenfo: {
    fontSize: 16
  },
  lucky: {
    fontSize: 20,
    fontFamily: 'LuckiestGuy-Regular',
  },
  item: {
    backgroundColor: '#62c5b4',
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#62c5b4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown3BtnStyle: {
    width: "80%",
    height: 34,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#444",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 30,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 12,
  }
});
