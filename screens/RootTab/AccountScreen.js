import * as React from "react";
import { Image, View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import ImgAva from "../../assets/SR.TKNK.png"

function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={ImgAva} />
        <View>
          <Text style={styles.titleName}>Ngô Đức Thịnh</Text>
          <Button color="#ff8080" title="Cập nhật hồ sơ" />
        </View>
      </View>
      <TouchableOpacity style={styles.content}>
        <Text style={styles.title}>Hỗ trợ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.content}>
        <Text style={styles.title}>Cài đặt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.content}>
        <Text style={styles.title}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AccountScreen;

const boxsize = 80;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ffb3b3',
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 16
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
    borderBottomWidth: 0.1,
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  title: {
    fontSize: 20
  }
});
