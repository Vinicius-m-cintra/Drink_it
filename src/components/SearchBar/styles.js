import {StyleSheet} from 'react-native';
import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    borderColor: colors.beige,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: colors.beige,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
  },
});

export default styles;
