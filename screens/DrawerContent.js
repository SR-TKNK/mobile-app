import * as React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../components/context";

export function DrawerContent(props) {
  const [active, setActive] = React.useState("true");

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/156262466_945593836211375_7832731084202317287_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Od6heZWm89UAX9GDA4T&tn=0DM2WU8Tdi4Mza4E&_nc_ht=scontent-xsp1-2.xx&oh=b866a4a3c39df32b2b551244ad5d49da&oe=61420DF0",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Ngô Đức Thịnh</Title>
                <Caption style={styles.caption}>ID: 18125113</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Active:
                </Paragraph>
                <Caption style={styles.caption}>{active}</Caption>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="shopping-search" color={color} size={size} />
                )}
                label="Search"
                onPress={() => {
                  props.navigation.navigate("Search");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="qrcode-scan" color={color} size={size} />
                )}
                label="Generate QR"
                onPress={() => {
                  props.navigation.navigate("GenerateQR");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="history" color={color} size={size} />
                )}
                label="History"
                onPress={() => {
                  props.navigation.navigate("History");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="ticket" color={color} size={size} />
                )}
                label="Promotions"
                onPress={() => {
                  props.navigation.navigate("Promotions");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="microsoft-xbox-controller-menu"
                    color={color}
                    size={size}
                  />
                )}
                label="Settings"
                onPress={() => {
                  props.navigation.navigate("Settings");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Support"
                onPress={() => {
                  props.navigation.navigate("Support");
                }}
              />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}
              >
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
