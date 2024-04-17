import styled from "styled-components/native";

export const Container = styled.View`
  background: #f0f3ff;
  border-radius: 4px;
  margin: 0 10px 14px 10px;
  padding: 12px;
`;

export const TypeText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`;

export const Type = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction: row;
  background: ${(props) => (props.type === "despesa" ? "#c62c36" : "#049301")};
  padding: 2px 6px;
  border-radius: 4px;
`;

export const TextValue = styled.Text`
  color: #112121;
  font-size: 16px;
  margin-top: 2px;
  font-weight: bold;
`;
