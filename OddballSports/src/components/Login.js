// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import AppLoading from 'expo-app-loading';

// part 2 - create a component
const Login = ( {logoImageSource, onLoginPress, onEmailChange, onPasswordChange, email, password}) => {

  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImageSource}/>
      <Text style={styles.title}>Oddball</Text>
      <View style={styles.loginBox}>
        <AntDesign name='mail' style={styles.mailIcon}/>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={onEmailChange}
          value={email}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <View style={styles.loginBox}>
        <AntDesign name='lock' style={styles.lockIcon}/>
        <TextInput
          placeholder="password"
          style={styles.input}
          onChangeText={onPasswordChange}
          value={password}
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity
        onPress={onLoginPress}
      >
        <View style={styles.loginButton} >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    height: 350
  },
  logo: {
    height: 150,
    width: 150
  },
  title: {
    fontSize: 40,
    fontFamily: 'LuckiestGuy_400Regular',
    letterSpacing: 2
  },
  loginBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#62C5B4',
    borderRadius: 10,
    width: 350,
    height: 50
  },
  input: {
    fontSize: 23,
    padding: 5,
    color: 'gray',
    flex: 1
  },
  mailIcon: {
    alignSelf: 'center',
    padding: 5,
    paddingLeft: 8,
    fontSize: 27,
    color: '#62C5B4'
  },
  lockIcon: {
    alignSelf: 'center',
    padding: 5,
    fontSize: 35,
    color: '#62C5B4'
  },
  loginButton: {
    height: 50,
    width: 125,
    backgroundColor: '#62C5B4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  loginButtonText: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    fontFamily: 'LuckiestGuy_400Regular',
    padding: 14,
    letterSpacing: 1
  }
});

// part 4 - export the component
export default Login;