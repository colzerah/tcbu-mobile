import { FormikErrors } from 'formik';
import React from 'react';

import { Container, Description } from './styles';

interface IMsgError {
  description: string | FormikErrors<Date>;
}
export function MsgError({ description }: IMsgError): JSX.Element {
  return (
    <Container>
      <Description>{description}</Description>
    </Container>
  );
}
