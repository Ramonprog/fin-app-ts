import { ActivityIndicator, Text, View } from "react-native";
import { Container, AreaInput, Input, SubmitButton, SubmitText, Title, TextError } from './styles'
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import api from "../../services/api";
import { useState } from "react";

export function SignUp() {
  const [load, setLoad] = useState(false)

  type Inputs = {
    name: string;
    email: string;
    password: string;
  };

  const { control, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

  const onSubmit = async (dataUser: Inputs) => {
    setLoad(true)
    try {
      const { data } = await api.post('/users', dataUser);
      console.log("🚀 ~ onSubmit ~ data:", data)
      setLoad(false)
      reset();
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error)

    }
  }

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
        {errors.name && <TextError>O nome é obrigatório</TextError>}
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
        {errors.email && <TextError>O e-mail é obrigatório</TextError>}
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
              secureTextEntry={true}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        {errors.password && <TextError>A senha é obrigatória</TextError>}
      </AreaInput>

      <SubmitButton activeOpacity={0.7} disabled={load} onPress={handleSubmit(onSubmit)}>
        {load ? <ActivityIndicator /> : <SubmitText>Cadastrar</SubmitText>}
      </SubmitButton>



    </Container>
  )
}