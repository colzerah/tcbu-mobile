import React from 'react';
import { ImageOrVideo } from 'react-native-image-crop-picker';

import { defaultAvatar } from '~/assets';
import { Container, Logo } from './styles';

interface IAvatarProps {
  uri?: string | ImageOrVideo;
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
