import { router, useFocusEffect } from "expo-router";
import { Text, SafeAreaView } from "react-native";

export default function MyScreen() {
  useFocusEffect(() => {
    router.replace("/auth");
  });

  return (
    <SafeAreaView>
      <Text>내정보 홈스크린</Text>
    </SafeAreaView>
  );
}
