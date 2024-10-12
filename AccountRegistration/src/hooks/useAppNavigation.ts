import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute(); 

  const navigateTo = (route: keyof RootStackParamList, params?: any) => {
    navigation.navigate(route, params);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return {
    navigateTo,goBack, navigation,route
  };
};