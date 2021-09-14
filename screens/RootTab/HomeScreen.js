import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Banner from "../../components/BannerList";
import DiscountProducts from "../../components/Products/DiscountProducts";
import Categories from "../../components/Categories/Categories";
import SuggestProducts from "../../components/Products/SuggestProducts";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Banner /> */}
      <View style={styles.content}>
        <Text style={styles.title}>Danh mục</Text>
        <Categories />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Khuyến mãi</Text>
        {/* <DiscountProducts /> */}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Gợi ý</Text>
        <SuggestProducts />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16
  },
  title: {
    color: "#ff8080",
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 8
  },
  content: {
    marginBottom: 8
  }
});