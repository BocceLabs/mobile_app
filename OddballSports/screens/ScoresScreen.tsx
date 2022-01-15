import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const url = 'https://be-abc-scoreboard-v1-honlt6vzla-uk.a.run.app/'

export default function GamesScreen() {

  const game_start = async (id) => {
    try {
      const response = await fetch(url + 'game/run/start/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': '9cc2cded-93f1-443d-b044-82b4fbe63298',
        }
      });
      const json = await response.json();
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/GamesScreen.tsx" />
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
});
