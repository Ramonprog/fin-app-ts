import { Image, Text, View } from "react-native";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useSelector } from "react-redux";

export function CustomDrawer(props) {
  const { name } = useSelector((state) => state.user);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Image
          source={require("../../assets/Logo.png")}
          resizeMode="contain"
          style={{ width: 90, height: 90 }}
        />

        <Text style={{ fontSize: 18, marginTop: 14 }}>Bem Vindo!</Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            marginTop: 14,
            fontWeight: "bold",
            marginBottom: 14,
            paddingHorizontal: 20,
          }}
        >
          {name}
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
