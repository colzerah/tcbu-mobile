import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useTheme } from 'styled-components';

import { getBirthday } from '~/utils/masks';
import { FormikErrors } from 'formik';
import { Keyboard, TextInputProps } from 'react-native';
import { Container, Label, TextInput } from './styles';

interface IInputProps extends TextInputProps {
  date: Date;
  width: number;
  error?: string | FormikErrors<Date>;
  label?: string;
  onChange(e: any): void;
}

export function InputDate({
  width,
  error,
  label,
  date,
  onChange,
  ...rest
}: IInputProps): JSX.Element {
  const { colors } = useTheme();
  const [show, setShow] = React.useState(false);
  const [dateValue, setDateValue] = React.useState(date);

  React.useEffect(() => {
    if (show) {
      Keyboard.dismiss();
    }
  }, [show]);

  const handleChange = (e: any): void => {
    setShow(false);
    onChange(`${e.nativeEvent.timestamp}`);
    setDateValue(e.nativeEvent.timestamp);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextInput
        {...rest}
        error={error}
        value={`${getBirthday({ nascimento: dateValue })}`}
        width={width}
        onPressOut={() => setShow(true)}
        selectTextOnFocus={false}
        selectionColor={colors.red}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateValue || new Date()}
          mode="date"
          is24Hour
          display="default"
          onChange={handleChange}
        />
      )}
    </Container>
  );
}
