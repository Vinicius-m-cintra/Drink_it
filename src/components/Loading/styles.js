import {StyleSheet} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: colors.darkGreen,
    zIndex: 10,
  },
});

export default styles;
