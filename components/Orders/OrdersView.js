import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, View, StyleSheet } from 'react-native';
import OrderListItem from './OrderListItem';
import { useNavigation } from '@react-navigation/native';

const ip = "http://192.168.1.103";
const currentLocation = `${ip}:3000/api`;

function OrdersView(props) {
  const { filter } = props;
  const navigation = useNavigation();
  const [orders, setOrders] = useState({});

  function fetchData() {
    let url = currentLocation + "/orders";
    if (filter !== "all") {
      url += "?status=" + filter;
    }
    axios.get(`${url}`)
      .then(res => {
        const order = res.data;
        setOrders(order);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) =>
          <OrderListItem
            order={item}
            onPress={() => {
              navigation.navigate('OrderDetails', {
                order: item
              });
            }}
          />
        }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

export default OrdersView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16
  }
});
