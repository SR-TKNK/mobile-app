import React from 'react';
import axios from 'axios';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import ProductImg from '../../assets/product.png'

const currentLocation = `${window.location.protocol}//${window.location.hostname}:3000/api`;

function ProductListItem(props) {
  const { product, onPress } = props;

  const handleBuy = (product) => {
    axios.get(`${currentLocation}/cart`)
      .then(res => {
        const cart = res.data;
        const index = cart.findIndex((element) => element.id == product.id);
        if (index != -1) {
          const quantity = { "quantity": cart[index].quantity + 1 };
          console.log(quantity);
          axios.patch(`${currentLocation}/cart/${product.id}`, quantity);
        } else {
          const newProduct = {
            "id": product.id,
            "name": product.name,
            "category": product.category,
            "price": product.price,
            "quantity": 1
          }
          axios.post(`${currentLocation}/cart`, newProduct);
        }
      })
      .catch(error => console.log(error));

  }

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.productImg} source={ProductImg} />
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.subText}>{product.category}</Text>
        <View style={styles.row}>
          <Text style={styles.subText}>{product.price}</Text>
          <TouchableOpacity
            onPress={() => handleBuy(product)}
          >
            <Text style={styles.price}>Mua +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: '#FFF',
    elevation: 5,
    marginBottom: 8
  },
  productImg: {
    height: 75,
    width: 75,
    marginLeft: 'auto',
    marginRight: 'auto'
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
    marginRight: 'auto'
  },
  price: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'right',

  }
});