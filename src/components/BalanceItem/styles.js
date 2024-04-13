import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #${(props) => props.bg};
  margin: 0 14px;
  border-radius: 4px;
  align-items: flex-start;
  justify-content: center;
  width: 300px;
  padding: 10px;
`;

export const Label = styled.Text`
  color: #fafafa;
  font-size: 19px;
  font-weight: bold;
`;

export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #fafafa;
`;
