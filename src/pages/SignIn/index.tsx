import { LogBox, Text, View } from "react-native";
import { AreaInput, Background, Container, Input, Link, Logo, SubmitButton, SubmitText } from "./styles";

export function SignIn() {
  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/Logo.png')} />


        <AreaInput>
          <Input placeholder="Seu e-mail" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Ssua senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.7}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <Text>Criar um conta!</Text>
        </Link>
      </Container>
    </Background>
  )
}