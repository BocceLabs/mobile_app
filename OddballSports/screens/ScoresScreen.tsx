import {Image, StyleSheet, TextInput} from 'react-native';

import { Text, View } from '../components/Themed';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import AppLoading from 'expo-app-loading';
import { useFonts, Orbitron_400Regular } from '@expo-google-fonts/orbitron';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const url = process.env.ABC_SCOREBOARD_URL;

export default function GamesScreen() {
  // fonts
  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
  });

  // state vars
  const [colorA, setColorA] = useState("blue");
  const [colorB, setColorB] = useState("red");
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [teamAName, onChangeTeamAName] = React.useState("");
  const [teamBName, onChangeTeamBName] = React.useState("");

  // score inc/dec-rementers
  const changeScoreA = async (value) => {
    if (scoreA + value >= 0) {
      setScoreA(scoreA + value)
    };
  };
  const changeScoreB = async (value) => {
    if (scoreB + value >= 0) {
      setScoreB(scoreB + value)
    };
  };

  // dropdown
  const colors = ["black", "blue", "green", "orange", "pink", "red"];

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
                        setColorA(selectedItem);
                      }}
                  />
                  <TextInput
                    style={styles.textinput}
                    onChangeText={onChangeTeamAName}
                    value={teamAName}
                  />
                  <Icon style={styles.icon}
                        color={colorA}
                        name={"caret-up-circle"}
                        onPress={() => changeScoreA(1)}
                  />
                  <View backgroundColor={colorA}>
                    <Text style={styles.score}>{scoreA}</Text>
                  </View>
                  <Icon style={styles.icon}
                        color={colorA}
                        name={"caret-down-circle"}
                        onPress={() => changeScoreA(-1)}
                  />
                </Col>
                <Col>
                  <SelectDropdown
                      data={colors}
                      onSelect={(selectedItem, index) => {
                        setColorB(selectedItem);
                      }}
                  />
                  <TextInput
                      style={styles.textinput}
                      onChangeText={onChangeTeamBName}
                      value={teamBName}
                  />
                  <Icon style={styles.icon}
                        color={colorB}
                        name={"caret-up-circle"}
                        onPress={() => changeScoreB(1)}
                  />
                  <View backgroundColor={colorB}>
                    <Text style={styles.score}>{scoreB}</Text>
                  </View>
                  <Icon style={styles.icon}
                        color={colorB}
                        name={"caret-down-circle"}
                        onPress={() => changeScoreB(-1)}
                  />
                </Col>
              </Row>
              <Col>
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
              </Col>
            </Col>
          </Grid>
        </View>
    );
  }
}

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
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  timer: {
    fontFamily: 'Orbitron_400Regular',
    textAlign: "center",
    fontSize: 50,
    paddingTop: 50,
  }
});
