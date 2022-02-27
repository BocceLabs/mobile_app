// part 1 - imports
import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Login from '../components/Login';
import LoggedInHomeScreen from "./LoggedInHomeScreen";
import {LuckiestGuy_400Regular, useFonts} from "@expo-google-fonts/luckiest-guy";
import AppLoading from "expo-app-loading";

// part 2 - create a component
const HomeScreen = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    console.log("login pressed");
    setLoggedIn(true);
  };

  const logout = () => {
    console.log("logout pressed");
    setLoggedIn(false);
  };

  const showScreen = () => {
    return loggedIn ?
      <LoggedInHomeScreen
        onLogoutPress={logout}
      />
      : <Login
        logoImageSource={require("../../assets/Mark-2C-Teal.png")}
        onLoginPress={login}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        email={email}
        password={password}
      />
  }

  return (
    <View>
      {showScreen()}
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({

});

// part 4 - export the component
export default HomeScreen;