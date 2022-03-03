import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

interface IInputProps extends TextInputProps {
  width: number;
  placeholder: string;
  error?: string;
}

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const TextInput = styled.TextInput<IInputProps>`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ error, theme }) =>
    error ? theme.colors.danger : theme.colors.grayDark};
  width: ${({ width }) => width}px;
  font-size: 17px;
  padding: 3%;
  color: ${({ theme }) => theme.colors.black}
  margin-bottom: 10px;
`;
