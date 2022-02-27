
// part 1 - imports
import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { useFonts, LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import AppLoading from 'expo-app-loading';
import {AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Entypo} from "@expo/vector-icons";
import Animated from "react-native-reanimated";

// part 2 - create a component
const MenuIconButton = ({icon, imageSource, bottomText, onPress}) => {

  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const displayIcon = () => {
    if (icon === null) {
      // display image
      return <Image style={styles.image} source={imageSource}/>;
    } else if (imageSource === null) {
      // display icon
      // icon format {iconType: "AntDesign", iconName: "home"}
      switch (icon.iconType) {
        case 'AntDesign':
          return <AntDesign style={[styles.icon, {color: icon.iconColor}]} name={icon.iconName} />;
        case 'Feather':
          return <Feather style={[styles.icon, {color: icon.iconColor}]} name={icon.iconName} />;
        case 'FontAwesome':
          return <FontAwesome style={[styles.icon, {color: icon.iconColor}]} name={icon.iconName} />;
        case 'Ionicons':
          return <Ionicons style={[styles.icon, {color: icon.iconColor}]} name={icon.iconName} />;
        case 'MaterialCommunityIcons':
          return <MaterialCommunityIcons style={[styles.icon, {color: icon.iconColor}]} name={icon.iconName} />;
        case 'MaterialIcons':
          return <MaterialIcons style={[styles.icon, {color: icon.iconColor}]} name={icon.iconName} />;
        case 'Entypo':
          return <Entypo style={[styles.icon, {color: icon.iconColor}]} name={icon.iconName} />;
        default:
          return <AntDesign style={[styles.icon, {color: icon.iconColor}]} name='error' />;
      }
    }
  };

  return (
      <View style={styles.button}>
        {displayIcon()}
        <Text style={styles.bottomText}>{bottomText}</Text>
      </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'gray',
    margin: 5,
    width: 160,
    height: 130
  },
  image: {
    height: 85,
    width: 85,
    margin: 4,
    alignSelf: 'center'
  },
  icon: {
    fontSize: 85,
    padding: 4,
    alignSelf: 'center'
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'LuckiestGuy_400Regular',
    textAlign: 'center',
    color: 'gray',
    letterSpacing: 1,
    padding: 4,
    flexWrap: 'wrap'
  }
});

// part 4 - export the component
export default MenuIconButton;