import { Text, View } from "react-native";
import { Container, AreaInput, Input, SubmitButton, SubmitText, Title } from './styles'
import { useDispatch } from "react-redux";
import { signUpSlice } from "../../store/slices/user";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export function SignUp() {
    const dispatch = useDispatch();

    type Inputs = {
        name: string;
        email: string;
        password: string;
    };

    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        console.log(data);
        dispatch(signUpSlice(data)); // Envia os dados para a ação signUpSlice
    };

    return (
        <Container>
            <Title>Cadastre-se</Title>

            <AreaInput>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Seu nome"
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="name"
                    rules={{ required: true }}
                />
            </AreaInput>
            <AreaInput>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Seu e-mail"
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="email"
                    rules={{ required: true }}
                />
            </AreaInput>
            <AreaInput>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Sua senha"
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="password"
                    rules={{ required: true }}
                />
            </AreaInput>

            <SubmitButton activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
                <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>



        </Container>
    )
}