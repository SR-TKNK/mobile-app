import React, { useEffect, useState } from 'react';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProductImg from '../../assets/product.png'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from 'axios';

const ip = "http://192.168.1.103";
const currentLocation = `${ip}:3000/api`;

function ProductDetails({ route }) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  console.log(product.name, route.params.name);
  console.log(product, route.params);

  function handleChange(q) {
    setQuantity(q);
  }

  const handleBuy = (product, quantity) => {
    axios.get(`${currentLocation}/cart`)
      .then(res => {
        const cart = res.data;
        const index = cart.findIndex((element) => element.id == product.id);
        if (index != -1) {
          const newQuantity = { "quantity": cart[index].quantity + quantity };
          axios.patch(`${currentLocation}/cart/${product.id}`, newQuantity);
        } else {
          const newProduct = {
            "id": product.id,
            "name": product.name,
            "category": product.category,
            "price": product.price,
            "quantity": quantity
          }
          axios.post(`${currentLocation}/cart`, newProduct);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={ProductImg} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.row}>
          <Text style={[styles.subText, styles.textBold]}>Danh mục: </Text>
          <Text style={styles.subText}>{product.category}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.subText, styles.textBold]}>Giá: </Text>
          <Text style={styles.subText}>{product.price}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.subText, styles.textBold]}>Số lượng: </Text>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => handleChange(quantity - 1)}
              disabled={quantity == 0}
            >
              <View style={styles.col}>
                <MaterialCommunityIcons name="minus" />
              </View>
            </TouchableOpacity>
            <View style={styles.col}>
              <Text>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleChange(quantity + 1)}
            >
              <View style={styles.col}>
                <MaterialCommunityIcons name="plus" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button onPress={() => handleBuy(product, quantity)} color="#ff9999" title="Thêm vào giỏ hàng" />
      </View>
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16
  },
  img: {
    width: 'auto',
    height: 300
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 13
  },
  textBold: {
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    height: 30,
    width: 30,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
});