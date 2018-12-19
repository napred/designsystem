import { DSProps } from '@napred/native';
import { Box } from '@napred/uniprimitives';
import React from 'react';
import {  Animated, TextInput } from 'react-native';

interface IProps extends DSProps {
  disabled?: boolean;
}

const Input = (props: IProps) => {
  return (
    <Box>
      <Box as={Animated.View} {...props}>
        <Box as={TextInput} height={props.height} />
      </Box>
    </Box>
  );
};

Input.defaultProps = {
  borderColor: 'greyLight',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: 1,
  height: 40,
  m: 0,
  px: 0,
  py: 0,
};

export default Input;
