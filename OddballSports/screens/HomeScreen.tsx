import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// export default props => {
//   let [fontsLoaded] = useFonts({
//     'LuckiestGuy-Regular': require('./assets/fonts/LuckiestGuy-Regular.ttf'),
//   });
//
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text style={{ fontFamily: 'LuckiestGuy-Regular', fontSize: 40 }}>Luckiest Guy</Text>
//           <Text style={{ fontSize: 40 }}>Platform Default</Text>
//         </View>
//     );
//   }
// };

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
    .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
    .catch(console.warn); // it's good to explicitly catch and inspect any error

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  let [fontsLoaded] = useFonts({
    'LuckiestGuy-Regular': require('../assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'LuckiestGuy-Regular', fontSize: 40 }}>OddballSports</Text>
          <Text style={{ fontSize: 40 }}>Referee</Text>
          <Text style={{ fontSize: 30 }}>Welcome, Dan Spomer!</Text>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  lucky: {
    fontSize: 20,
    fontFamily: 'LuckiestGuy-Regular'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
