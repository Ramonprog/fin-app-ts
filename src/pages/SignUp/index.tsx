import { Text, View } from "react-native";
import { Container, AreaInput, Input, SubmitButton, SubmitText, Title } from './styles'

export function SignUp() {
    return (
        <Container>
            <Title>Cadastre-se</Title>
            <AreaInput>
                <Input placeholder="Seu nome" />
            </AreaInput>
            <AreaInput>
                <Input placeholder="Seu e-mail" />
            </AreaInput>
            <AreaInput>
                <Input placeholder="Sua senha" />
            </AreaInput>

            <SubmitButton activeOpacity={0.7}>
                <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>

        </Container>
    )
}