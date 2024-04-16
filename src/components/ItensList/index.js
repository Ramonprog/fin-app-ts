import { IconButton } from "react-native-paper";
import { Area, Label, List } from "./styles";

export function ItensList() {
  return (
    <Area>
      <IconButton icon={"shopping"} iconColor={"#181818"} size={20} />
      <Label>Ultimas movimentações</Label>

      <List data={[]}  keyExtractor={(item) => item.id} renderItem={}/>
    </Area>
  );
}
