import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme'
import { Routes } from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage.clear()

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
      <Routes />
    </ThemeProvider>
  );
}