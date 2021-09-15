import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryListItem from './CategoryListItem';
import axios from 'axios';
import { View } from 'react-native-animatable';

const currentLocation = "http://192.168.1.103:3000/api";

export default function Categories({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${currentLocation}/categories`)
      .then(res => {
        console.log(res.data);
        const categories = res.data;
        setCategories(categories);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <FlatList
      data={categories}
      numColumns={4}
      style={{ marginLeft: -2, marginRight: -2 }}
      renderItem={({ item }) =>
        <View
          style={styles.wapper}
        >
          <CategoryListItem
            category={item}
            onPress={() => {
              navigation.navigate('Category', {
                name: item.name,
                id: item.id
              });
            }}
          />
        </View>
      }
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  wapper: {
    width: '25%'
  }
});
