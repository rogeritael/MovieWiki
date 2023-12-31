import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SplashScreen } from './src/screens/SplashScreen';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme'
import { Container } from './src/components/Container';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'SourceSans400': require('./src/fonts/SourceSansPro-Regular.otf'),
    'SourceSans500': require('./src/fonts/SourceSansPro-Semibold.otf'),
    'SourceSans700': require('./src/fonts/SourceSansPro-Bold.otf'),
  })

  if(!isFontsLoaded){
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container align='center' justify='center'>
        <SplashScreen />
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}