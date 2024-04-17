import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../Home";
import { TransactionRecord } from "../TransactionRecord";
import { Profile } from "../Profile";

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
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen
        name="Registrar movimentação"
        component={TransactionRecord}
      />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}
