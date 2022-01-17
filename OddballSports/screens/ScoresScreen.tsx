import {Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const url = 'https://be-abc-scoreboard-v1-honlt6vzla-uk.a.run.app/'
export default function GamesScreen() {
  // state vars
  const [colorA, setColorA] = useState("blue");
  const [colorB, setColorB] = useState("red");

  // dropdown
  const colors = ["black", "blue", "green", "orange", "pink", "red", "yellow"];

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'LuckiestGuy-Regular', fontSize: 40 }}>OddballSports</Text>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Simple Scoreboard Control</Text>
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
                <Icon style={styles.icon} color={colorA} name={"caret-up-circle"} />
                <View backgroundColor={colorA}>
                  <Text style={styles.score}>00</Text>
                </View>
                <Icon style={styles.icon} color={colorA} name={"caret-down-circle"} />
              </Col>
              <Col>
                <SelectDropdown
                    data={colors}
                    onSelect={(selectedItem, index) => {
                      setColorB(selectedItem);
                    }}
                />
                <Icon style={styles.icon} color={colorB} name={"caret-up-circle"} />
                <View backgroundColor={colorB}>
                  <Text style={styles.score}>00</Text>
                </View>
                <Icon style={styles.icon} color={colorB} name={"caret-down-circle"} />
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
                  <Icon style={styles.icon} name={"play"} />
                </Col>
                <Col>
                  <Icon style={styles.icon} name={"pause"} />
                </Col>
                <Col>
                  <Icon style={styles.icon} name={"stop"} />
                </Col>
              </Row>
            </Col>
          </Col>
        </Grid>
      </View>
  );
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
    marginTop: 10,
  },
  col: {

  },
  timer: {
    fontFamily: 'Orbitron-Regular',
    textAlign: "center",
    fontSize: 50,
    paddingTop: 50,
  }
});
