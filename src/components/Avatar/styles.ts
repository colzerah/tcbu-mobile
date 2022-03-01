import styled from 'styled-components/native';

export const Container = styled.View``;

export const Logo = styled.Image`
  height: ${({ height }) => height || 50}px;
  width: ${({ width }) => width || 50}px;
  border-radius: 50px;
`;
