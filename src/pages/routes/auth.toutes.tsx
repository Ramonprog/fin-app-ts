import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";

const AuthNavigator = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <AuthNavigator.Navigator>

      <AuthNavigator.Screen name="SignIn" component={SignIn} />
      <AuthNavigator.Screen name="SignUp" component={SignUp} />
    </AuthNavigator.Navigator>
  )
}