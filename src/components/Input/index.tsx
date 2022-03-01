import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, TextInput, Label } from './styles';

interface IInputProps extends TextInputProps {
  placeholder: string;
  width: number;
  error?: string;
  label?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
}

export function Input({
  placeholder,
  width = 320,
  error,
  label,
  keyboardType = 'default',
  returnKeyType,
  ...rest
}: IInputProps): JSX.Element {
  const { colors } = useTheme();
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextInput
        {...rest}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        error={error}
        placeholder={placeholder}
        width={width}
        placeholderTextColor={colors.gray}
        selectionColor={colors.red}
      />
    </Container>
  );
}
