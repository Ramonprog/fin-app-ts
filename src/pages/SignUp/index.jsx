import { ActivityIndicator, Text, View } from "react-native";
import {
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Title,
  TextError,
  LabelText,
} from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import api from "../../services/api";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export function SignUp() {
  const [load, setLoad] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (dataUser) => {
    console.log("🚀 ~ onSubmit ~ dataUser:", dataUser);
    setLoad(true);
    try {
      await api.post("/users", dataUser);
      setLoad(false);
      navigation.navigate("SignIn");
      reset();
    } catch (error) {
      setLoad(false);
      alert("Erro ao cadastrar, tente novamente");
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };

  return (
    <Container>
      <Title>Cadastre-se</Title>

      <AreaInput>
        <LabelText>Nome:</LabelText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Seu nome"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="name"
          rules={{ required: true }}
        />
        {errors.name && <TextError>O nome é obrigatório</TextError>}
      </AreaInput>

      <AreaInput>
        <LabelText>E-mail:</LabelText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Seu e-mail"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        {errors.email && <TextError>O e-mail é obrigatório</TextError>}
      </AreaInput>
      <AreaInput>
        <LabelText>Senha:</LabelText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Sua senha"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        {errors.password && <TextError>A senha é obrigatória</TextError>}
      </AreaInput>

      <SubmitButton
        activeOpacity={0.7}
        disabled={load}
        onPress={handleSubmit(onSubmit)}
      >
        {load ? <ActivityIndicator /> : <SubmitText>Cadastrar</SubmitText>}
      </SubmitButton>
    </Container>
  );
}
