import {StyleSheet} from 'react-native';

import colors from '../../variables/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  card: {
    padding: 10,
    borderRadius: 5,
    borderColor: colors.beige,
    padding: 5,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: colors.darkGreen,
    overflow: 'hidden',
  },
  drinkit: {
    fontSize: 34,
    fontWeight: '700',
    color: '#f4f4f4',
  },
  thumb: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginRight: 6,
  },
  title: {
    fontSize: 16,
    color: '#f4f4f4',
    marginLeft: 'auto',
    maxWidth: '100%',
    marginBottom: 10,
  },
  item: {
    color: '#f4f4f4',
  },
});

export default styles;
