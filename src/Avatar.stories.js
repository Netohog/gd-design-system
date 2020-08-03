import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Avatar } from './Avatar';

export default {
  title: 'Design System|Avatar',

  parameters: {
    component: Avatar,
  },
};

export const standard = () => (
  <Avatar
    size="large"
    username="Daniel"
    src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCLLI5c-okKi5TSILdmNhcmRfcGhvdG8qKDZkNDYwN2I3MTQwYjllY2MxNGYxZWMxNDMwMTMzM2JlMzE4Y2E0MDMwAdKmuHcect-5TUZ4ZhfCIkmRuO_n"
  />
);

export const sizes = () => (
  <div>
    <Avatar
      size="large"
      username="Daniel"
      src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCLLI5c-okKi5TSILdmNhcmRfcGhvdG8qKDZkNDYwN2I3MTQwYjllY2MxNGYxZWMxNDMwMTMzM2JlMzE4Y2E0MDMwAdKmuHcect-5TUZ4ZhfCIkmRuO_n"
    />
    <Avatar
      size="medium"
      username="Daniel"
      src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCLLI5c-okKi5TSILdmNhcmRfcGhvdG8qKDZkNDYwN2I3MTQwYjllY2MxNGYxZWMxNDMwMTMzM2JlMzE4Y2E0MDMwAdKmuHcect-5TUZ4ZhfCIkmRuO_n"
    />
    <Avatar
      size="small"
      username="Daniel"
      src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCLLI5c-okKi5TSILdmNhcmRfcGhvdG8qKDZkNDYwN2I3MTQwYjllY2MxNGYxZWMxNDMwMTMzM2JlMzE4Y2E0MDMwAdKmuHcect-5TUZ4ZhfCIkmRuO_n"
    />
    <Avatar
      size="tiny"
      username="Daniel"
      src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCLLI5c-okKi5TSILdmNhcmRfcGhvdG8qKDZkNDYwN2I3MTQwYjllY2MxNGYxZWMxNDMwMTMzM2JlMzE4Y2E0MDMwAdKmuHcect-5TUZ4ZhfCIkmRuO_n"
    />
  </div>
);

export const initials = () => (
  <div>
    <Avatar username="Daniel" />
    <Avatar username="Victor" />
    <Avatar username="Gustavo" />
    <Avatar username="Neto" />
  </div>
);

export const loading = () => (
  <div>
    <Avatar size="large" loading />
    <Avatar size="medium" loading />
    <Avatar size="small" loading />
    <Avatar size="tiny" loading />
  </div>
);

export const large = () => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Daniel" />
    <Avatar
      size="large"
      username="Daniel"
      src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCLLI5c-okKi5TSILdmNhcmRfcGhvdG8qKDZkNDYwN2I3MTQwYjllY2MxNGYxZWMxNDMwMTMzM2JlMzE4Y2E0MDMwAdKmuHcect-5TUZ4ZhfCIkmRuO_n"
    />
  </div>
);

export const knobs = () => (
  <Avatar
    loading={boolean('Loading')}
    size={select('Size', ['tiny', 'small', 'medium', 'large'])}
    username="Daniel"
    src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCLLI5c-okKi5TSILdmNhcmRfcGhvdG8qKDZkNDYwN2I3MTQwYjllY2MxNGYxZWMxNDMwMTMzM2JlMzE4Y2E0MDMwAdKmuHcect-5TUZ4ZhfCIkmRuO_n"
  />
);

knobs.story = {
  decorators: [withKnobs],
};
