import { Container, IconView, TextValue, Type, TypeText } from "./styles";
import { Icon } from "react-native-paper";
import { TouchableWithoutFeedback, Alert } from "react-native";

export function Card({ data, handleDelete }) {
  function handleDeletItem() {
    Alert.alert("Atenção", "Deseja excluir o registro?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => handleDelete(data.id),
      },
    ]);
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeletItem}>
      <Container>
        <Type>
          <IconView type={data.type}>
            <Icon
              source={data.type === "despesa" ? "arrow-down" : "arrow-up"}
              color={"#fff"}
              size={20}
            />
            <TypeText>{data.type}</TypeText>
          </IconView>
        </Type>

        <TextValue>R$ {data?.value}</TextValue>
      </Container>
    </TouchableWithoutFeedback>
  );
}
