import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
  position: relative;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 74px;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin: 8px 0 24px 0;
  padding: 0 14px;
  color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
  background-color: #3b3dbf;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f0f4ff;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
  border: 1px solid #c62c36;
  border-radius: 8px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #c62c36;
`;

export const HeaderArea = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
`;
