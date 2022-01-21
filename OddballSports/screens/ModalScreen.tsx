import {Image, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import AppLoading from 'expo-app-loading';
import { useFonts, Orbitron_400Regular } from '@expo-google-fonts/orbitron';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const URL = process.env.ABC_SCOREBOARD_URL;
const API_KEY = process.env.ABC_SCOREBOARD_KEY;

export default function ModalScreen( {route, navigation} ) {
  // fonts
  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    'LuckiestGuy-Regular': require('../assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  const setGameValue = async (gameId, data) => {
    try {
      const response = await fetch(URL + 'game/set_value/' + gameId, {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
                'X-Api-Key': API_KEY,
          },
        body: JSON.stringify(data),
      });
      const json = await response.json();
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setLoading(false);
    }
  };

  // params from the previous screen
  const { gameId, game } = route.params;

  // state vars
  const [gameData, setGameData] = useState(game);
  const [colorA, setColorA] = useState(gameData["team_a_ball_color_pattern"]);
  const [colorB, setColorB] = useState(gameData["team_b_ball_color_pattern"]);
  const [scoreA, setScoreA] = useState(gameData["team_a_score"]);
  const [scoreB, setScoreB] = useState(gameData["team_b_score"]);
  const [isLoading, setLoading] = useState(false);

  // score inc/dec-rementers
  const changeScoreA = async (gameId, value) => {
    let score = scoreA + value;
    if (score >= 0) {
      setScoreA(score);
      setGameValue(gameId, {"team_a_score": score});
    };
  };
  const changeScoreB = async (gameId, value) => {
    let score = scoreB + value;
    if (score >= 0) {
      setScoreB(score);
      setGameValue(gameId, {"team_b_score": score});
    };
  };

  // set the color
  const colors = ["black", "blue", "green", "orange", "pink", "red"];
  const changeColorA = async (gameId, value) => {
    setColorA(value);
    setGameValue(gameId, {"team_a_ball_color_pattern": value});
  }
  const changeColorB = async (gameId, value) => {
    setColorB(value);
    setGameValue(gameId, {"team_b_ball_color_pattern": value});
  }


  if (!fontsLoaded || isLoading) {
    return <AppLoading/>;
  }  else {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'LuckiestGuy-Regular', fontSize: 40}}>OddballSports</Text>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Simple Scoreboard Control</Text>
          <Grid>
            <Col>
              <Row>
                <Col style={styles.col}>
                  <SelectDropdown
                      data={colors}
                      onSelect={(selectedItem, index) => {
                        changeColorA(gameId, selectedItem);
                      }}
                  />
                  <Text style={styles.teamName}>{gameData["team_a"]}</Text>
                  <Icon style={styles.icon}
                        color={colorA}
                        name={"caret-up-circle"}
                        onPress={() => changeScoreA(gameId,1)}
                  />
                  <View backgroundColor={colorA}>
                    <Text style={styles.score}>{scoreA}</Text>
                  </View>
                  <Icon style={styles.icon}
                        color={colorA}
                        name={"caret-down-circle"}
                        onPress={() => changeScoreA(gameId,-1)}
                  />
                </Col>
                <Col>
                  <SelectDropdown
                      data={colors}
                      onSelect={(selectedItem, index) => {
                        changeColorB(gameId, selectedItem);
                      }}
                  />
                  <Text style={styles.teamName}>{gameData["team_b"]}</Text>
                  <Icon style={styles.icon}
                        color={colorB}
                        name={"caret-up-circle"}
                        onPress={() => changeScoreB(gameId,1)}
                  />
                  <View backgroundColor={colorB}>
                    <Text style={styles.score}>{scoreB}</Text>
                  </View>
                  <Icon style={styles.icon}
                        color={colorB}
                        name={"caret-down-circle"}
                        onPress={() => changeScoreB(gameId,-1)}
                  />
                </Col>
              </Row>
            </Col>
          </Grid>
        </View>
    );
  }
}
/**
<Row>
  <Col>
    <Text style={styles.timer}>00:00</Text>
  </Col>
</Row>
<Row>
  <Col>
    <Icon style={styles.icon} name={"play"}/>
  </Col>
  <Col>
    <Icon style={styles.icon} name={"pause"}/>
  </Col>
  <Col>
    <Icon style={styles.icon} name={"stop"}/>
  </Col>
</Row>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tablewidget: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
  },
  teamName: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
  },
  icon: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 54,
    marginVertical: 30
  },
  score: {
    fontFamily: 'LuckiestGuy-Regular',
    fontSize: 58,
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    textAlignVertical: "center",
    marginTop: 12,
  },
  col: {

  },
  timer: {
    fontFamily: 'Orbitron_400Regular',
    textAlign: "center",
    fontSize: 50,
    paddingTop: 50,
  }
});
