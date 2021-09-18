import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import ViewProductOrder from '../../components/Products/ViewProductOrder';

export default function OrderDetails({ route }) {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Thông tin khách hàng</Text>
          <Text>Họ và tên: {order.user.name}</Text>
          <Text>Số điện thoại: {order.user.number}</Text>
          <Text>Địa chỉ: {order.user.address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Trạng thái đơn hàng: </Text>
          <Text>{order.status}</Text>
        </View>
        <View>
          <Text style={styles.title}>Sản phẩm</Text>
          <FlatList
            data={order.products}
            renderItem={({ item }) =>
              <ViewProductOrder product={item} />
            }
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Thành tiền: </Text>
          <Text>{order.total}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    fontSize: 13
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'flex-end'
  }
});