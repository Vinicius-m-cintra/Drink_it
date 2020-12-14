import React from 'react';
import {Text} from 'react-native';

const Title = ({title}) => {
  return (
    <Text style={{color: '#fff', fontSize: 26, textAlign: 'center'}}>
      {title}
    </Text>
  );
};

export default Title;
