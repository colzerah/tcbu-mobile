import React from 'react';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Formik } from 'formik';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { userFormSchema } from '~/utils/yupSchemas';
import { ActivityIndicator, Keyboard } from 'react-native';
import { MsgError } from '~/components/MsgError';
import { useTheme } from 'styled-components';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import {
  ContentView,
  Container,
  TouchableOpacity,
  ContainerButtonSheet,
} from './styles';

interface IValues {
  code: string;
  name: string;
  birthDate: string;
  photo?: string;
}

export function UserForm({ route }): JSX.Element {
  const bottomSheet = React.useRef();
  const { setOptions } = useNavigation();
  const { colors } = useTheme();
  const [loading, setLoading] = React.useState(true);
  const [avatarLoading, setAvatarLoading] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState<IValues>(
    {} as IValues,
  );

  React.useLayoutEffect(() => {
    setOptions({
      title: route.params?.user ? 'Editar Usuário' : 'Cadastrar Usuário',
      headerBackTitle: ' ',
    });
  }, [setOptions]);

  React.useEffect(() => {
    if (route.params?.user) {
      setInitialValues(route.params.user);
    }
    setLoading(false);
  }, [route.params]);

  const handleTakePhoto = async (): Promise<void> => {
    setAvatarLoading(true);
    bottomSheet.current?.close();
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setInitialValues({ ...initialValues, photo: image.path });
      setAvatarLoading(false);
    });
  };

  const handleGetGalery = async (): Promise<void> => {
    setAvatarLoading(true);
    bottomSheet.current?.close();
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setInitialValues({ ...initialValues, photo: image.path });
      setAvatarLoading(false);
    });
  };

  const handleSubmitForm = (v: IValues): void => {
    Keyboard.dismiss();
    console.log({
      name: v.name,
      code: v.code,
      birthDate: v.birthDate,
      photo: initialValues.photo,
    });
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.blue}
        style={{ marginTop: 30 }}
      />
    );
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={values => handleSubmitForm(values)}
        validationSchema={userFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={200}>
              <ContainerButtonSheet>
                <Button
                  title="Tirar Foto"
                  height={40}
                  width={320}
                  type="create"
                  onPress={handleTakePhoto}
                />
                <Button
                  title="Buscar na Galeria"
                  height={40}
                  width={320}
                  type="create"
                  onPress={handleGetGalery}
                />
              </ContainerButtonSheet>
            </BottomSheet>
            <TouchableOpacity onPress={() => bottomSheet.current?.show()}>
              {!avatarLoading ? (
                <Avatar width={90} height={90} uri={initialValues.photo} />
              ) : (
                <ActivityIndicator
                  size="large"
                  color={colors.red}
                  style={{ marginTop: 30 }}
                />
              )}
            </TouchableOpacity>
            <Input
              placeholder=""
              width={300}
              label="Código:"
              error={errors.code}
              keyboardType="decimal-pad"
              value={values.code}
              onChangeText={handleChange('code')}
            />
            {errors.code && <MsgError description={errors.code} />}

            <Input
              value={values.name}
              placeholder=""
              width={300}
              label="Nome:"
              error={errors.name}
              keyboardType="default"
              spellCheck={false}
              autoCorrect={false}
              onChangeText={handleChange('name')}
            />
            {errors.name && <MsgError description={errors.name} />}
            <Input
              value={values.birthDate}
              placeholder=""
              width={300}
              error={errors.birthDate}
              label="Idade:"
              keyboardType="numeric"
              onChangeText={handleChange('birthDate')}
            />
            {errors.birthDate && <MsgError description={errors.birthDate} />}

            <ContentView>
              <Button
                title={route.params?.user ? 'Editar' : 'Cadastrar'}
                type={route.params?.user ? 'edit' : 'create'}
                height={50}
                width={200}
                onPress={handleSubmit}
              />
            </ContentView>
          </>
        )}
      </Formik>
    </Container>
  );
}
