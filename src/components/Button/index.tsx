import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, TouchableOpacity } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  type: 'edit' | 'delete' | 'create';
  width: number;
  height: number;
  title: string;
}

export function Button({
  height,
  width,
  type,
  onPress,
  title,
}: IButtonProps): JSX.Element {
  return (
    <Container>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        width={width}
        height={height}
        type={type}
      >
        <Title type={type}>{title}</Title>
      </TouchableOpacity>
    </Container>
  );
}
