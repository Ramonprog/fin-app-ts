import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../Home";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#fff",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: "#3b3bdf",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#181818",
        drawerInactiveBackgroundColor: "#f0f2ff",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
