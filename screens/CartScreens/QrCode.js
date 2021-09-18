import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import QrCodeImg from '../../assets/qr.png';

function QrCode({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ width: 300, height: 300 }} source={QrCodeImg} />
    </View>
  );
}

export default QrCode;