// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import MenuIconButton from "../components/MenuIconButton";
import {withNavigation} from "react-navigation";
import * as WebBrowser from "expo-web-browser";
import { openComposer } from "react-native-email-link";


// part 2 - create a component
const LoggedInHomeScreen = ( {navigation, onLogoutPress} ) => {

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ABCMenu')}
      >
        <MenuIconButton
          icon={null}
          imageSource={require('../../assets/abc.png')}
          bottomText="American Bocce Co."
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          let result = await WebBrowser.openBrowserAsync('https://oddballentertainment.com/events');
        }}
      >
        <MenuIconButton
          icon={null}
          imageSource={require('../../assets/Mark-2C-Teal.png')}
          bottomText="Oddball Events"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          let result = await WebBrowser.openBrowserAsync('https://worldwiffleball.org/entry/');
        }}
      >
        <MenuIconButton
          icon={null}
          imageSource={require('../../assets/world-wiffle-ball.png')}
          bottomText="World Wiffle Ball"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openComposer({
          to: "david@davidrhoffman.net,dav1dmcmanus280@gmail.com",
          subject: "Oddball App Bug Report",
          body: "Hi, can you help me with ...",
        }) }
      >
        <MenuIconButton
          icon={{iconType: 'MaterialIcons', iconName: 'message', iconColor: '#DB89BA'}}
          imageSource={null}
          bottomText="Report Bug"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onLogoutPress}
      >
        <MenuIconButton
          icon={{iconType: 'MaterialIcons', iconName: 'logout', iconColor: 'gray'}}
          imageSource={null}
          bottomText="Logout"
        />
      </TouchableOpacity>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

// part 4 - export the component
export default withNavigation(LoggedInHomeScreen);