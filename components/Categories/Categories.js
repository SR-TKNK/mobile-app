import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryListItem from './CategoryListItem';
import axios from 'axios';
import { View } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const currentLocation = `${window.location.protocol}//${window.location.hostname}:3000/api`;

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios.get(`${currentLocation}/categories`)
      .then(res => {
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
