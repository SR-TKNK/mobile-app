import React from 'react';
import axios from 'axios';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import ProductImg from '../../assets/product.png'

function ViewProductOrder(props) {
  const { product } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Image style={styles.productImg} source={ProductImg} />
      </View>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={styles.row}>
          <Text style={styles.title}>{product.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subText}>{product.category}</Text>
          <Text style={[styles.subText, styles.textRight]}>x{product.quantity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{product.price * product.quantity}</Text>
        </View>
      </View>
    </View>
  );
}

export default ViewProductOrder;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  productImg: {
    height: 70,
    width: 70
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subText: {
    fontSize: 13,
  },
  textRight: {
    textAlign: 'right',
    marginLeft: 'auto'
  },
  price: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 'auto',
  }
});