import React, { useEffect } from "react";
import { View } from "react-native";
import AuthRoutes from "./auth.toutes";
import AppRoutes from "./app.routes";
import { useSelector } from "react-redux";

export default function Routes() {
  const { signed } = useSelector((state) => state.user);

  const loading = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
