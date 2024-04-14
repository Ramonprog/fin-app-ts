import {
  Alert,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Header } from "../../components/Header";
import {
  Container,
  CustomTextInput,
  CustonSegmentedButtons,
  HeaderArea,
  SubmitButton,
  SubmitText,
} from "./styles";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { format } from "date-fns";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

export function TransactionRecord() {
  const navigation = useNavigation();
  const [transactionType, setTransactionType] = useState("receita");
  const [load, setLoad] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formatDate = (date) => {
    return format(date, "dd/MM/yyyy");
  };

  const onSubmit = async (data) => {
    Alert.alert(
      "Confirmando Registro",
      `Você está prestes a registrar uma ${transactionType.toLowerCase()} no valor de R$ ${
        data.value
      }.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Continuar",
          onPress: async () => {
            try {
              const dateFormatted = formatDate(new Date());
              const payload = {
                description: data?.description,
                value: Number(data?.value),
                type: transactionType,
                date: dateFormatted,
              };
              const token = await AsyncStorage.getItem("@finToken");
              await api.post("/receive", payload, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              console.log("deu bom");
              navigation.navigate("Início");
              reset();
            } catch (error) {
              console.log("Erro ao registrar transação:", error.message);
              Alert.alert(
                "Erro",
                "Ocorreu um erro ao registrar a transação. Por favor, tente novamente mais tarde."
              );
            }
          },
        },
      ]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <HeaderArea>
          <Header title={"Registro de movimentação"} />
        </HeaderArea>

        <SafeAreaView>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                mode="outlined"
                label="Descrição"
                placeholder="Descrição do registro"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="description"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                mode="outlined"
                label="Valor"
                placeholder="Valor desejado"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="value"
            rules={{ required: true }}
          />

          <CustonSegmentedButtons
            value={transactionType}
            onValueChange={setTransactionType}
            buttons={[
              {
                value: "receita",
                label: "Receita",
                icon: "arrow-top-left",
              },
              {
                value: "despesa",
                label: "Despesa",
                icon: "arrow-bottom-right",
              },
            ]}
          />

          <SubmitButton activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
