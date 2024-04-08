import { LogBox, Text, View } from "react-native";
import { AreaInput, Container, Input, LabelText, Link, Logo, SubmitButton, SubmitText, TextError } from "./styles";
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/slices/user";

export function SignIn() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  type IUserData = {
    email: string;
    password: string;
  };

  const { control, handleSubmit, reset, formState: { errors } } = useForm<IUserData>();

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp' as never);
  };


  const onSubmit = async (dataUser: IUserData) => {
    try {
      await dispatch(signInUser(dataUser));

    } catch (error) {
      // Lidar com erros de login
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <Container>
      <Logo source={require('../../assets/Logo.png')} />

      <AreaInput>
        <LabelText>Nome:</LabelText>
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
          name="email"
          rules={{ required: true }}
        />
        {errors.email && <TextError>O nome é obrigatório</TextError>}
      </AreaInput>
      <AreaInput>
        <LabelText>Nome:</LabelText>
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
          name="password"
          rules={{ required: true }}
        />
        {errors.password && <TextError>O nome é obrigatório</TextError>}
      </AreaInput>

      <SubmitButton activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      <Link onPress={handleNavigateToSignUp}>
        <Text>Criar um conta!</Text>
      </Link>
    </Container>
  )
}