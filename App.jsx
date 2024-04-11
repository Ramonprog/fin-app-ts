import "react-native-gesture-handler";

import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/store";
import Routes from "./src/pages/routes";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#f0f4ff" barStyle={"dark-content"} />
        <Routes />
      </NavigationContainer>
    </ReduxProvider>
  );
}
