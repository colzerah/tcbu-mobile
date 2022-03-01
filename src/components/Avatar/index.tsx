import React from 'react';

import { defaultAvatar } from '~/assets';
import { Container, Logo } from './styles';

interface IAvatarProps {
  uri?: string;
  height?: number;
  width?: number;
}

export function Avatar({ uri, height, width }: IAvatarProps): JSX.Element {
  return (
    <Container>
      <Logo
        source={uri ? { uri } : defaultAvatar}
        height={height}
        width={width}
      />
    </Container>
  );
}
