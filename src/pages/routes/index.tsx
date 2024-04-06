import { View } from "react-native";
import { AuthRoutes } from "./auth.toutes";

export function Routes() {
  const loading = false;
  const signed = false
  return (
    signed ? (<View></View>) : <AuthRoutes />

  )
}