import { IconButton } from "react-native-paper";
import { Area, Header, Label, List } from "./styles";
import { Card } from "../Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ItensList() {
  const [receives, setReceives] = useState([]);

  async function getReceives() {
    const today = new Date();
    let todayFormated = format(today, "dd/MM/yyyy");
    try {
      const token = await AsyncStorage.getItem("@finToken");
      const { data } = await api.get("/receives", {
        params: {
          date: todayFormated,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("🚀 ~ getReceives ~ data:", data);
      setReceives(data);
    } catch (error) {
      console.log("🚀 ~ getReceives ~ error:", error);
    }
  }

  useEffect(() => {
    getReceives();
  }, []);

  return (
    <Area>
      <Header>
        <IconButton icon={"shopping"} iconColor={"#181818"} size={20} />
        <Label>Ultimas movimentações</Label>
      </Header>

      <List
        data={receives}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Area>
  );
}
