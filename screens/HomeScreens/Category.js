import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductListItem from '../../components/Products/ProductListItem';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const currentLocation = `${window.location.protocol}//${window.location.hostname}:3000/api`;

export default function Category({ route }) {
  const { name, id } = route.params;
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(`${currentLocation}/products?category=${name}`)
      .then(res => {
        const products = res.data;
        setProducts(products);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) =>
          <View style={styles.wapper}>
            <ProductListItem
              product={item}
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  product: item,
                  name: item.name
                });
              }}
            />
          </View>
        }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.content}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wapper: {
    paddingHorizontal: 8,
    width: '50%'
  }
});
