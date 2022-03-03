import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
`;

export const UserQtd = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
`;

export const TextEmpty = styled.Text`

  text-align: center;
  padding: 100px
  color: ${({ theme }) => theme.colors.gray};
`;

export const ContainerScroll = styled.ScrollView`
  padding: 7px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const ContentItem = styled.View`
  width: 200px;
`;

export const TextItem = styled.Text`
  font-size: 12px;
`;
