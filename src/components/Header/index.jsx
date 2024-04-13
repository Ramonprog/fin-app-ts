import { IconButton, Text } from "react-native-paper";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export function Header({ title }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(signOut());
    } catch (error) {
      console.log("🚀 ~ handleLogout ~ error:", error);
    }
  };

  return (
    <Container>
      <IconButton
        icon="menu"
        size={24}
        onPress={() => navigation.openDrawer()}
      />
      <Text variant="headlineMedium">title</Text>
      <IconButton icon="exit-to-app" size={24} onPress={handleLogout} />
    </Container>
  );
}
