import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductListItem from './ProductListItem';
import axios from 'axios';

const currentLocation = "http://192.168.1.103:3000/api";

export default function SuggestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${currentLocation}/products`)
      .then(res => {
        const products = res.data;
        setProducts(products);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <FlatList
      data={products}
      numColumns={3}
      renderItem={({ item }) =>
        <View style={styles.wapper}>
          <ProductListItem
            product={item}
          />
        </View>
      }
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: -4,
  },
  wapper: {
    paddingHorizontal: 4,
    width: '33.33333%'
  }
});
