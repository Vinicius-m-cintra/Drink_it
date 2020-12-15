import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    borderColor: colors.beige,
    padding: 5,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: colors.darkGreen,
    margin: 5,
    maxHeight: 75,
  },
  flex: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    width: Dimensions.get('window').width - 80,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
