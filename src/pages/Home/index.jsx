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
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      dispatch(getMoviments());
      setDataLoaded(true);
    };

    if (isFocused) {
      fetchBalance();
    }
  }, [dispatch, isFocused]);

  useEffect(() => {
    if (dataLoaded) {
      const balanceArray = Object.keys(balance).map((key, index) => ({
        saldo: balance[key],
        id: index.toString(),
        tag: key,
      }));
      setBalanceList(balanceArray);
    }
  }, [balance, dataLoaded]);

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
