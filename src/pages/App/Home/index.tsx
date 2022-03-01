import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import { useTheme } from 'styled-components';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  TextEmpty,
  UserQtd,
  Header,
  ContainerItem,
  ContentItem,
  TextItem,
} from './styles';

export function Home(): JSX.Element {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const [refresh, setRefresh] = React.useState(false);
  const [refreshEnd, setRefreshEnd] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const data = [
    {
      id: 1,
      code: '1',
      name: 'Strogonof',
      birthDate: '10',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 2,
      code: '2',
      name: 'Stroble',
      birthDate: '20',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 3,
      code: '3',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 4,
      code: '4',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 5,
      code: '3',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 6,
      code: '4',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 7,
      code: '3',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 8,
      code: '4',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 9,
      code: '3',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 10,
      code: '4',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 11,
      code: '3',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: 12,
      code: '4',
      name: 'Jenifer',
      birthDate: '30',
      photo:
        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
  ];

  const renderItem = ({ item }): JSX.Element => (
    <ContainerItem>
      <Avatar uri={item.photo} />
      <ContentItem>
        <TextItem>Codigo: {item.code}</TextItem>
        <TextItem>Nome: {item.name}</TextItem>
        <TextItem>Idade: {item.birthDate} anos</TextItem>
      </ContentItem>
      <Button
        title="Editar"
        height={50}
        width={50}
        type="edit"
        onPress={() => navigate('UserForm', { user: item })}
      />

      <Button
        title="Deletar"
        height={50}
        width={50}
        type="delete"
        onPress={() => console.log('Delete')}
      />
    </ContainerItem>
  );

  const onRefresh = React.useCallback(async () => {
    console.log('refresh');
  }, []);

  const onReached = React.useCallback(async () => {
    setRefreshEnd(true);
    console.log('oi');
    setRefreshEnd(false);
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.red}
        style={{ marginTop: 30 }}
      />
    );
  }

  return (
    <Container>
      <Header>
        <Button
          title="Criar Usuário"
          height={30}
          width={100}
          type="create"
          onPress={() => navigate('UserForm')}
        />
        <UserQtd>{data.length} / 1</UserQtd>
      </Header>

      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        ListEmptyComponent={<TextEmpty>Nemhum usuário encontrado</TextEmpty>}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={onRefresh}
            tintColor={colors.blue}
          />
        }
        onEndReached={onReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          refreshEnd ? (
            <ActivityIndicator color={colors.blue} size="large" />
          ) : (
            <View style={{ display: 'none' }} />
          )
        }
      />
    </Container>
  );
}
