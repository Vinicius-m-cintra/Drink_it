import {StyleSheet} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreen,
  },
  title: {
    color: '#fff',
    borderBottomWidth: 0.5,
    borderColor: colors.beige,
    fontSize: 24,
    padding: 10,
  },
  list: {},
  empty: {
    color: '#fff',
    margin: 10,
  },
});

export default styles;
