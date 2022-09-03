import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HexGrid from './src/HexGrid';
import Layout from './src/Layout';
import Hexagon from './src/Hexagon/Hexagon';
import GridGenerator from './src/GridGenerator';

export default function App() {
  const hexagons = GridGenerator.parallelogram(-2, 3, -2, 1);
  return (
    <View style={styles.container}>
      <Text>Open up App.jsto start working on your app!</Text>
      <StatusBar style="auto" />
      <HexGrid width={200} height={200}>
          <Layout size={{ x: 7, y: 7 }}>
            { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} fill={'black'} />) }
          </Layout>
        </HexGrid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
