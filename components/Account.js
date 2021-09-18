import React, { useState, useEffect } from "react";
import { Image, View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import ImgAva from "../assets/SR.TKNK.png";

export default function Account(props) {
  const { user } = props;
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={ImgAva} />
        <View>
          <Text style={styles.titleName}>{user.name}</Text>
          <Button color="#ff8080" title="Cập nhật hồ sơ" />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Ví của tôi: {user.amount} VND</Text>
      </View>
      <TouchableOpacity style={styles.content}>
        <Text style={styles.title}>Hỗ trợ</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.content}>
          <Text style={styles.title}>Cài đặt</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.content}>
        <Text style={styles.title}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const boxsize = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#ffb3b3',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: boxsize,
    height: boxsize,
    borderRadius: boxsize / 2,
    borderColor: '#fff',
    borderWidth: 0.5,
    marginRight: 16
  },
  titleName: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 8
  },
  content: {
    alignItems: 'stretch',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20
  }
});
