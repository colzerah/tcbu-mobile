import styled from 'styled-components/native';

interface IButton {
  width: number;
  height: number;
  type: 'edit' | 'delete' | 'create';
}

export const Container = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
`;

export const TouchableOpacity = styled.TouchableOpacity<IButton>`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ type, theme }) => {
    if (type === 'edit') {
      return theme.colors.yellow;
    }
    if (type === 'delete') {
      return theme.colors.red;
    }

    return theme.colors.green;
  }};
`;
