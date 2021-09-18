import React, { useEffect, useState } from 'react';
import axios from "axios";
import { View, Text, TouchableOpacity, TextInput, Linking, StyleSheet, Button, Image } from "react-native";
import ViewProductOrder from "../../components/Products/ViewProductOrder";
import { Alert, Modal, Pressable } from "react-native";
import QrCode from '../../assets/qr.png'
import { useNavigation } from '@react-navigation/native';

const currentLocation = `${window.location.protocol}//${window.location.hostname}:3000/api`;

export default function Payment({ route }) {
  const { cart, method } = route.params;
  console.log(cart);
  const [name, onChangeName] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  const [idOrder, setIdOrder] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  function fetchOrder() {
    axios.get(`${currentLocation}/orders`)
      .then(res => {
        const id = res.data.length + 1;
        console.log(res.data);
        setIdOrder(id);
        const order = {
          id: id,
          products: cart,
          status: "Chờ giao hàng",
          user: {
            username: 'ndt123',
            name: name,
            number: number,
            address: address
          }
        }
        axios.post(`${currentLocation}/orders`, order);
      })
      .catch(error => console.log(error));
    for (const i in cart)
      axios.delete(`${currentLocation}/cart/${cart[i].id}`);

  }

  function handleOrder(method) {
    if (name == null || number == null || address == null) {
      Alert.alert("Vui lòng điền đầy đủ thông tin");
    } else {
      if (method == "paypal") {
        fetchOrder();
        Linking.openURL(`${window.location.protocol}//${window.location.hostname}:5000?id=${idOrder}`);
      }
      if (method == "cash") {
        fetchOrder();
      }
      if (method == "qr") {
        fetchOrder();
        navigation.navigate('QrCode', {
          id: idOrder,
          name: name,
          number: number,
          address: address
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 16 }}>
        <Text>Họ và tên</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Họ và tên"
        />
        <Text>Số điện thoại</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          placeholder="Số điện thoại"
        />
        <Text>Địa chỉ</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Địa chỉ"
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleOrder(method, cart)}
        >
          <View style={styles.order}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ĐẶT HÀNG</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={QrCode} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleQr()}
            >
              <Text style={styles.textStyle}>Đã thanh toán</Text>
            </Pressable>
          </View>

        </View>
      </Modal>
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
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});