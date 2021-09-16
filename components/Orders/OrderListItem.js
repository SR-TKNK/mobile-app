import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ViewProductOrder from '../Products/ViewProductOrder';

function OrderListItem(props) {
  const { order, onPress } = props;
  const [total, setTotal] = useState(0);

  function getTotal(products) {
    let sum = 0;
    for (const i in products) {
      sum += products[i].quantity * products[i].price;
    }
    setTotal(sum);
  };

  useEffect(() => {
    getTotal(order.products);
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.row}>
        <Text style={styles.title}>#{order.id}</Text>
        <Text style={[styles.textPink, styles.subText]}>{order.status}</Text>
      </View>

      <ViewProductOrder product={order.products[0]} />

      <View style={styles.row}>
        <Text>{order.products.length} sản phẩm</Text>
        <Text>Thành tiền: {total}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default OrderListItem;

const boxSize = 80;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 5,
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 13,
  },
  textPink: {
    color: '#ff4d4d'
  },
  quantity: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 4
  },
  mrAuto: {
    marginRight: 'auto'
  }
});