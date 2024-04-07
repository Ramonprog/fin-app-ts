import styled from "styled-components/native";

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
  flex-direction: row;
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

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  border-radius: 8px;
  height: 45px;
  background-color: #3b3bbf;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Link = styled.TouchableOpacity`
  margin: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 500;
`;
