import { Container, IconView, TextValue, Type, TypeText } from "./styles";
import { Icon } from "react-native-paper";

export function Card({ item }) {
  return (
    <Container>
      <Type>
        <IconView>
          <Icon source="arrow-down" color={"#fff"} size={20} />
          <TypeText>Despesa</TypeText>
        </IconView>
      </Type>

      <TextValue>R$ {item?.value}</TextValue>
    </Container>
  );
}
