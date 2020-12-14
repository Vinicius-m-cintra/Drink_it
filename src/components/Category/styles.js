import {StyleSheet} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.beige,
    borderWidth: 1,
    backgroundColor: colors.darkGreen,
    margin: 5,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
