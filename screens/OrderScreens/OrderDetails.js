import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import ViewProductOrder from '../../components/Products/ViewProductOrder';

const currentLocation = "http://192.168.1.103:3000/api";

export default function OrderDetails({ route }) {
  const { order } = route.params;
  console.log(order);
  const [total, setTotal] = useState();

  function getTotal(products) {
    let sum = 0;
    for (const i in products) {
      sum += products[i].quantity * products[i].price;
    }
    setTotal(sum);
  };

  useEffect(() => {
    getTotal(order.products);
  }, []);

  return (
    <View>
      <View>
        <Text>#{order.id}</Text>
      </View>
      <View>
        <Text>Vận chuyển</Text>
        <Text>{order.status}</Text>
      </View>
      <View>
        <Text>Sản phẩm</Text>
        <FlatList
          data={order.products}
          renderItem={({ item }) =>
            <ViewProductOrder product={item} />
          }
          keyExtractor={item => `${item.id}`}
        />
      </View>
      <View>
        <Text>Thành tiền:</Text>
        <Text>{total}</Text>
      </View>
    </View>
  );
}
