import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, Text, View, Button, StyleSheet, Dimensions, Alert } from 'react-native';
import CartListItem from '../../components/CartListItem';
import { useNavigation } from '@react-navigation/native';

var screenHeight = Dimensions.get('window').height;

const ip = "http://192.168.1.103";
const currentLocation = `${ip}:3000/api`;

function Cart({ route }) {
  const mess = route.params;
  if (mess != "undefined" && mess != null) {
    Alert.alert(mess);
    console.log(mess);
    mess = null;
  }

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  function getTotal(cart) {
    let sum = 0;
    for (const i in cart) {
      sum += cart[i].quantity * cart[i].price;
    }
    setTotal(sum);
  };

  function fetchData() {
    axios.get(`${currentLocation}/cart`)
      .then(res => {
        const cart = res.data;
        setCart(cart);
        getTotal(cart);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, [cart]);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          data={cart}
          renderItem={({ item }) =>
            <CartListItem product={item} />
          }
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.title}>Tổng: {total}</Text>
          <Button
            onPress={() => {
              navigation.navigate('Payment', {
                cart: cart,
                total: total
              });
            }}
            title="Đặt hàng"
          />
        </View>
      </View>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ff8080'
  },
  body: {
    height: screenHeight - 106
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc'
  }
});
