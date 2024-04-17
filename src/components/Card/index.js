import { Container, IconView, TextValue, Type, TypeText } from "./styles";
import { Icon } from "react-native-paper";

export function Card({ data }) {
  return (
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
  );
}
