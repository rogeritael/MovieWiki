import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SplashView } from './styles'
import logoImage from '../../../assets/LogoSplash.png'
import { CustomText } from '../../components/CustomText';
import { Logo } from '../../components/Logo';

export function SplashScreen() {
  return (
    <SplashView>
      <Logo />
      <CustomText>
        MovieWiki
      </CustomText>
    </SplashView>
  );
}
