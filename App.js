import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logoImage from './assets/LogoSplash.png'
import { SplashScreen } from './src/screens/SplashScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // logo: {
  //   width: 64,
  //   height: 64,
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: '#fff',
  //   marginTop: 12,
  // },
});
