import { ImageSourcePropType } from 'react-native';

export interface Country {
    id:number;
    code: string;
    name: string;
    flagUrl: ImageSourcePropType;
  }