import { IconButton } from "react-native-paper";
import { Area, Header, Label, List } from "./styles";
import { Card } from "../Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export function ItensList() {
  const isFocused = useIsFocused();
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
    if (isFocused) {
      getReceives();
    }
  }, [isFocused]);

  async function handleDeleteRegister(id) {
    try {
      const token = await AsyncStorage.getItem("@finToken");
      await api.delete(`/receives/delete`, {
        params: {
          item_id: id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getReceives();
    } catch (error) {
      console.log("🚀 ~ handleDeleteRegister ~ error:", error);
    }
  }

  return (
    <Area>
      <Header>
        <IconButton icon={"shopping"} iconColor={"#181818"} size={20} />
        <Label>Ultimas movimentações</Label>
      </Header>

      <List
        data={receives}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card data={item} handleDelete={handleDeleteRegister} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Area>
  );
}
