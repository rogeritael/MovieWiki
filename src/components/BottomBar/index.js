import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarItem, BottomBarContainer } from './styles';
import { CustomText } from '../CustomText';
import { theme } from '../../styles/theme';

const tabIcons = {
  'Home': 'home-outline',
  "Search": 'search-outline',
  "Favorites": 'heart-outline',
}

export function BottomBar({ state, descriptors, navigation }) {
  return (
    <BottomBarContainer style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarItem
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Ionicons name={tabIcons[route.name]} size={ theme.metrics.px(20)} color={isFocused ? theme.colors.red : theme.colors.white} />
            <CustomText
              weight="500"
              size={10}
              color={isFocused ? 'red' : 'white'}
            >
              {label}
            </CustomText> 
          </BarItem>
        );
      })}
    </BottomBarContainer>
  );
}