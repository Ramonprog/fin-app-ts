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

export function Profile() {
  return (
    <>
      <Container>
        <HeaderArea>
          <Header title="Meu perfil" />
        </HeaderArea>
        <Message>Página de Perfil</Message>
        <Name numberOfLines={1}>Ramon</Name>

        <NewLink>
          <NewText>Fazer registros</NewText>
        </NewLink>

        <LogoutButton>
          <LogoutText>Sair</LogoutText>
        </LogoutButton>
      </Container>
    </>
  );
}
