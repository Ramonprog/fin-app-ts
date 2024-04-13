import styled from "styled-components/native";
import { Button, SegmentedButtons, TextInput } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f4ff;
  justify-content: center;
  position: relative;
`;

export const CustomTextInput = styled(TextInput)`
  margin: 0 20px;
  background-color: #f0f4ff;
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  width: 90%;
  margin: 0 auto;
  background-color: #00b94a;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const CustonSegmentedButtons = styled(SegmentedButtons)`
  margin: 20px auto;
  max-width: 330px;
`;

export const HeaderArea = styled.View`
  position: absolute;
  top: 0;
`;
