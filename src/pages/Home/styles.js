import {StyleSheet, Platform} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreen,
    paddingTop: Platform.OS === 'ios' ? 10 : 5,
    justifyContent: 'space-between',
  },
  welcome: {
    color: '#fff',
    margin: 5,
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default styles;
