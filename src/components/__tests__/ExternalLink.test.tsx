import React from 'react';
import { render } from '@testing-library/react-native';
import ExternalLink from '../ExternalLink';

describe('ExternalLink', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ExternalLink url="https://github.com">GitHub</ExternalLink>
    );
    expect(getByText('GitHub')).toBeTruthy();
  });
});
