import { SplashView } from './styles'
import { CustomText } from '../../components/CustomText';
import { Logo } from '../../components/Logo';
import { useEffect } from 'react';

export function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home')
    }, 2000)
  }, [])

  return (
    <SplashView>
      <Logo />
      <CustomText>
        MovieWiki
      </CustomText>
    </SplashView>
  );
}
