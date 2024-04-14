import { useMemo } from "react";
import { Balance, Container, Label } from "./styles";

export function BalanceItem({ data }) {
  const labelName = useMemo(() => {
    if (data?.tag === "saldo") {
      return {
        label: "Saldo atual",
        color: "3b3bbf",
      };
    } else if (data?.tag === "receita") {
      return {
        label: "Receita",
        color: "00b94a",
      };
    } else {
      return {
        label: "Saidas",
        color: "ef463a",
      };
    }
  }, [data]);

  const formmater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>{formmater.format(data.saldo)}</Balance>
    </Container>
  );
}
