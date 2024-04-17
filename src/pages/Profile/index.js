import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import {
  Container,
  HeaderArea,
  LogoutButton,
  LogoutText,
  Message,
  Name,
  NewLink,
  NewText,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const { name } = useSelector((state) => state.user);
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <HeaderArea>
          <Header title="Meu perfil" />
        </HeaderArea>
        <Message>Hey, bem vindo de volta!</Message>
        <Name numberOfLines={1}>{name}</Name>

        <NewLink onPress={() => navigation.navigate("Registrar movimentação")}>
          <NewText>Fazer registros</NewText>
        </NewLink>

        <LogoutButton>
          <LogoutText>Sair</LogoutText>
        </LogoutButton>
      </Container>
    </>
  );
}
