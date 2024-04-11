import { ActivityIndicator, LogBox, Text, View } from "react-native";
import {
  AreaInput,
  Container,
  Input,
  LabelText,
  Link,
  Logo,
  SubmitButton,
  SubmitText,
  TextError,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { signInUser } from "../../store/slices/user";

export function SignIn() {
  const navigation = useNavigation();
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleNavigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const onSubmit = async (dataUser) => {
    try {
      dispatch(signInUser(dataUser));
    } catch (error) {
      // Lidar com erros de login
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <Container>
      <Logo source={require("../../assets/Logo.png")} />

      <AreaInput>
        <LabelText>E-mail:</LabelText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Seu nome"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        {errors.email && <TextError>O nome é obrigatório</TextError>}
      </AreaInput>
      <AreaInput>
        <LabelText>Senha:</LabelText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Seu nome"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        {errors.password && <TextError>O nome é obrigatório</TextError>}
      </AreaInput>

      <SubmitButton
        activeOpacity={0.7}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        {loading ? <ActivityIndicator /> : <SubmitText>Acessar</SubmitText>}
      </SubmitButton>

      <Link onPress={handleNavigateToSignUp}>
        <Text>Criar um conta!</Text>
      </Link>
    </Container>
  );
}
