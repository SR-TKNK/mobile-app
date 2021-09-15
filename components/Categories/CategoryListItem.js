import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

function CategoryListItem(props) {
  const { category, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.categoryTitle} >{category.name}</Text>
        <Image style={styles.categoryImg} source={{ uri: category.image }} />
      </View>
    </TouchableOpacity>
  );
}

export default CategoryListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginBottom: 4,
    borderColor: '#ccc',
    marginLeft: 2,
    marginRight: 2,
    elevation: 2,
    borderWidth: 0.5
  },
  categoryImg: {
    width: 35,
    height: 35
  },
  categoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
});