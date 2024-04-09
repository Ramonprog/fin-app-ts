import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";

const AuthNavigator = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <AuthNavigator.Navigator>

      <AuthNavigator.Screen name="SignIn" component={SignIn} options={{
        headerShown: false // para nao mostrar o header
      }} />
      <AuthNavigator.Screen name="SignUp" component={SignUp} options={{
        headerStyle: {
          backgroundColor: '#3b3dbf',
        },
        headerTintColor: '#fff',
        title: 'Voltar'
      }} />
    </AuthNavigator.Navigator>
  )
}