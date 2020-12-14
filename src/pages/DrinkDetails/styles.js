import {StyleSheet} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreen,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 22,
    color: colors.beige,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 15,
  },
});

export default styles;
