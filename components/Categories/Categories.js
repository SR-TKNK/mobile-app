import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryListItem from './CategoryListItem';
import axios from 'axios';
import { View } from 'react-native-animatable';

export default function Categories({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/categories')
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
      initialNumToRender={1}
      maxToRenderPerBatch={1}
    />
  );
}

const styles = StyleSheet.create({
  wapper: {
    width: '25%'
  }
});
