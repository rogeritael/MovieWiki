import { SplashView } from './styles'
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
