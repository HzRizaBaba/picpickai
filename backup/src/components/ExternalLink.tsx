import React from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';

type Props = {
  url: string;
  children: React.ReactNode;
};

const ExternalLink = ({ url, children }: Props) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Text style={{ color: 'blue' }}>{children}</Text>
  </TouchableOpacity>
);

export default ExternalLink;
