import * as React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Constants from 'expo-constants';
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Header(props) {
  const { name } = props;
  return (
    <View style={styles.container}>
      {name == "Trang chủ" ? (
        <View style={styles.row}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="qrcode-scan" color="#ff9999" size={40} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
          >
            <MaterialCommunityIcons name="magnify" color="#ff9999" size={40} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.bgPink}>
          <Text style={styles.textWhite}>{name}</Text>
        </View>
      )}
    </View>

  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    paddingTop: Constants.statusBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  textWhite: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  bgPink: {
    backgroundColor: '#ff9999',
    paddingVertical: 8
  }
});
