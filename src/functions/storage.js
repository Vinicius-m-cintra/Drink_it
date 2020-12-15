import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('favorite', jsonValue);
  } catch (e) {
    Alert.alert('Ops', 'Error on fetch data');
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('favorite');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    Alert.alert('Ops', 'Error on fetch data');
  }
};
