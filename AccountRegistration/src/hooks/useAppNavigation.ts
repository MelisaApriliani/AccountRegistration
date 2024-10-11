import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp>();

  const navigateTo = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  return {
    navigateTo,
  };
};