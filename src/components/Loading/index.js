import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import colors from '../../variables/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#f4f4f4" />
    </View>
  );
};

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

export default Loading;
