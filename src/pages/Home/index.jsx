import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { useDispatch } from "react-redux";
import { getMoviments } from "../../store/slices/balance";
import { useEffect } from "react";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviments());
  }, []);

  return (
    <View>
      <Header title="Minhas movimentações" />
    </View>
  );
}
