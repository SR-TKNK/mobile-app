import React from 'react';
import axios from 'axios';
import { Image, Text, View, StyleSheet, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductImg from '../assets/product.png'

const currentLocation = `${window.location.protocol}//${window.location.hostname}:3000/api`;

function CartListItem(props) {
  const { product } = props;

  const handlePlus = (product) => {
    const quantity = { "quantity": product.quantity + 1 };
    axios.patch(`${currentLocation}/cart/${product.id}`, quantity);
  }

  const handleMinus = (product) => {
    const quantity = { "quantity": product.quantity - 1 };
    if (quantity.quantity == 0) {
      axios.delete(`${currentLocation}/cart/${product.id}`);
    }
    else {
      axios.patch(`${currentLocation}/cart/${product.id}`, quantity);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Image style={styles.img} source={ProductImg} />
      </View>
      <View style={[styles.col, styles.mrAuto, styles.col2]}>
        <Text numberOfLines={1} style={styles.title}>{product.name}</Text>
        <Text style={styles.subText}>Price: {product.price}</Text>
        <Text style={styles.subText}>Total: {product.quantity * product.price}</Text>
      </View>
      <View style={styles.col}>
        <View style={[styles.row, styles.textRight]}>
          <MaterialCommunityIcons onPress={() => handlePlus(product)} name="plus-circle" size={35} color="#ccc" />
          <Text style={styles.quantity}>{product.quantity}</Text>
          <MaterialCommunityIcons onPress={() => handleMinus(product)} name="minus-circle" size={35} color="#ccc" />
        </View>
      </View>
    </View>
  );
}

export default CartListItem;

const boxSize = 80;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    borderColor: '#ccc',
    borderWidth: 0.5
  },
  img: {
    width: boxSize,
    height: boxSize,
    marginRight: 4
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    flexDirection: 'column'
  },
  col2: {
    width: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 18,
  },
  textRight: {
    textAlign: 'right'
  },
  quantity: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 4
  },
  mrAuto: {
    marginRight: 'auto'
  }
});