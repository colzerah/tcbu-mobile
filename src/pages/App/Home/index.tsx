import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import { Users } from '~/dtos/IUser';
import { useTheme } from 'styled-components';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { useNavigation } from '@react-navigation/native';
import {
  deleteUserRequest,
  listUsersRequest,
} from '~/services/requests/registersRequest';
import { getBirthday } from '~/utils/masks';
import { useFocusEffect } from '@react-navigation/native';
import {
  Container,
  TextEmpty,
  UserQtd,
  Header,
  ContainerItem,
  ContentItem,
  TextItem,
  ContainerScroll,
} from './styles';

export function Home(): JSX.Element {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const [users, setUsers] = React.useState<Users[]>([] as Users[]);
  const [usersAmount, setUsersAmount] = React.useState(0);
  const [refresh, setRefresh] = React.useState(false);
  const [refreshEnd, setRefreshEnd] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [userPage, setUserPage] = React.useState(1);

  useFocusEffect(
    React.useCallback(() => {
      setRefresh(true);
      onRefresh();
      setRefresh(false);
    }, []),
  );

  React.useEffect(() => {
    (async () => {
      onRefresh();
      setLoading(false);
    })();
  }, [refresh]);

  const handleDelete = React.useCallback(async (id: string) => {
    setRefresh(true);
    await deleteUserRequest(id);
    setRefresh(false);
  }, []);

  const renderItem = ({ item }): JSX.Element => (
    <ContainerScroll>
      <ContainerItem>
        <Avatar uri={item.photo} />
        <ContentItem>
          <TextItem>Codigo: {item.code}</TextItem>
          <TextItem>Nome: {item.name}</TextItem>
          <TextItem>
            Idade: {getBirthday({ nascimento: item.birthDate })} anos
          </TextItem>
        </ContentItem>
        <Button
          title="Editar"
          height={50}
          width={50}
          type="edit"
          onPress={() => {
            navigate('UserForm', { user: item });
          }}
        />

        <Button
          title="Deletar"
          height={50}
          width={50}
          type="delete"
          onPress={() => handleDelete(item.id)}
        />
      </ContainerItem>
    </ContainerScroll>
  );

  const onRefresh = React.useCallback(async () => {
    const response = await listUsersRequest(1);
    setUsers(response.users);
    setUsersAmount(response.usersAmount);
    setUserPage(1);
    setRefresh(false);
  }, []);

  const onReached = React.useCallback(async () => {
    setRefreshEnd(true);

    if (users.length < usersAmount) {
      const response = await listUsersRequest(userPage + 1);
      setUserPage(userPage + 1);
      setUsers(response.users);
    }
    setRefreshEnd(false);
  }, [userPage, users.length, usersAmount]);

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
          onPress={() => {
            navigate('UserForm');
          }}
        />
        <UserQtd>
          {users.length} / {usersAmount}
        </UserQtd>
      </Header>

      <FlatList
        data={users}
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
