import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getMoviments } from "../../store/slices/balance";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native"; //garante que o usuario está na tela, retornando true ou false
import { Container, ListBalance } from "./styles";
import { BalanceItem } from "../../components/BalanceItem";

export function Home() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const balance = useSelector((state) => state.balance);
  const [balanceList, setBalanceList] = useState([]);
  useEffect(() => {
    const balanceArray = Object.keys(balance).map((key, index) => ({
      saldo: balance[key],
      id: index,
      tag: key,
    }));
    setBalanceList(balanceArray);

    setBalanceList(balanceArray);

    let isActive = true;
    if (!isActive) {
      dispatch(getMoviments());
    }

    return () => (isActive = false);
  }, [isFocused]);

  return (
    <Container>
      <Header title="Minhas movimentações" />

      <ListBalance
        data={balanceList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />
    </Container>
  );
}
