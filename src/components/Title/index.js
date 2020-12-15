import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const Title = ({title}) => {
  return <Text style={{color: '#fff', fontSize: 26, textAlign: 'center'}}>{title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
