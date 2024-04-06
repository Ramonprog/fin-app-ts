import { LogBox, Text, View } from "react-native";
import { AreaInput, Container, Input, Link, Logo, SubmitButton, SubmitText } from "./styles";
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const navigation = useNavigation()
  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp' as never);
  };
  return (
    <Container>
      <Logo source={require('../../assets/Logo.png')} />

      <AreaInput>
        <Input placeholder="Seu e-mail" />
      </AreaInput>
      <AreaInput>
        <Input placeholder="Sua senha" />
      </AreaInput>

      <SubmitButton activeOpacity={0.7}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      <Link onPress={handleNavigateToSignUp}>
        <Text>Criar um conta!</Text>
      </Link>
    </Container>
  )
}