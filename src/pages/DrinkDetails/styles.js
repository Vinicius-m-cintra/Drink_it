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
    marginTop: 5,
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
  ingredient: {
    color: '#fff',
    marginLeft: '5%',
  },
  alcoholic: {
    color: colors.beige,
    alignSelf: 'flex-end',
    marginRight: '20%',
    marginTop: 5,
  },
  instructions: {
    color: '#fff',
    marginHorizontal: 10,
    textAlign: 'center',
    marginBottom: 20
  },
});

export default styles;
