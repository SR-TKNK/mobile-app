import React, { useEffect, useState } from 'react';
import axios from "axios";
import { View, Text, TouchableOpacity, FlatList, ScrollView, Linking, StyleSheet, Button } from "react-native";
import ViewProductOrder from "../../components/Products/ViewProductOrder";
import { useNavigation } from '@react-navigation/native';

export default function Payment({ route }) {
  const { cart, total } = route.params;
  const [select, setSelect] = useState("paypal");
  const navigation = useNavigation();
  console.log(total);
  function handleChoose(method) {
    setSelect(method);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Sản phẩm</Text>
          <FlatList
            data={cart}
            renderItem={({ item }) =>
              <ViewProductOrder product={item} />
            }
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Chọn phương thức thanh toán</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleChoose("paypal")}
          >
            <View style={[styles.button, select !== "paypal" ? styles.default : styles.select]}>
              <Text>Thanh toán bằng Paypal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleChoose("cash")}
          >
            <View style={[styles.button, select !== "cash" ? styles.default : styles.select]}>
              <Text>Thanh toán khi nhận hàng</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleChoose("wallet")}
          >
            <View style={[styles.button, select !== "wallet" ? styles.default : styles.select]}>
              <Text>Thanh toán bằng ví của tôi</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('FromInfor', {
              cart: cart,
              total: total,
              method: select
            });
          }}
        >
          <View style={styles.order}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>THANH TOÁN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 32
  },
  content: {
    marginBottom: 8,
    padding: 8
  },
  button: {
    borderRadius: 5,
    elevation: 3,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  default: {
    borderColor: '#ccc',
    borderWidth: 0.5
  },
  select: {
    borderColor: '#ff9999',
    backgroundColor: '#ff9999',
  },
  title: {
    color: '#ff9999',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  order: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 16,

  }
});