import { Text, View } from "react-native";
import MainScreen from "@/src/screens/MainScreen/MainScreen"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainScreen></MainScreen>
    </View>
  );
}