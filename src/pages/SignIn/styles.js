import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f4ff;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  width: 90%;
  background-color: #3b3bbf;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Link = styled.TouchableOpacity`
  margin: 10px;
`;
export const TextError = styled.Text`
  color: red;
`;
export const LabelText = styled.Text`
  margin-top: 15px;
  align-self: flex-start;
  margin-left: 23px;
`;
