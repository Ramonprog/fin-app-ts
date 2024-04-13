import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../Home";
import { IconButton } from "react-native-paper";

import { useDispatch } from "react-redux";
import { signOut } from "../../store/slices/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(signOut());
    } catch (error) {
      console.log("🚀 ~ handleLogout ~ error:", error);
    }
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <IconButton
            icon={"logout"}
            iconColor="#181818"
            onPress={handleLogout}
          />
        ),
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
