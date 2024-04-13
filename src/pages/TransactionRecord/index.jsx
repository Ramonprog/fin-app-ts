import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
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

export function TransactionRecord() {
  const [transactionType, setTransactionType] = useState("Receita");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
                value: "Receita",
                label: "Receita",
                icon: "arrow-top-left",
              },
              {
                value: "Despesa",
                label: "Despesa",
                icon: "arrow-bottom-right",
              },
            ]}
          />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
