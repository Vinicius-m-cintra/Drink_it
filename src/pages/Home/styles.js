import {StyleSheet, Platform} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreen,
    paddingTop: Platform.OS === 'ios' ? 10 : 5,
  },
});

export default styles;
