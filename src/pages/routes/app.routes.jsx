import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../Home";
import { IconButton } from "react-native-paper";

import { useDispatch } from "react-redux";
import { signOut } from "../../store/slices/user";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut());
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
