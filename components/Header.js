import * as React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

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
    elevation: 10,
    textAlign: 'center'
  },
  row: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
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
    textTransform: 'uppercase'
  },
  bgPink: {
    backgroundColor: '#ff9999',
    paddingVertical: 16
  }
});
