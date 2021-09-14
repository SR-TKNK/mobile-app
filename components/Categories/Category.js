import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import axios from 'axios';

export default function Category({ route }) {
  const { name, id } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/products?category=${name}`)
      .then(res => {
        const products = res.data;
        setProducts(products);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <FlatList
      data={products}
      numColumns={2}
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
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wapper: {
    paddingHorizontal: 8,
    width: '50%'
  }
});
