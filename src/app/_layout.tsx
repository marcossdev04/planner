import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";
import "@/utils/dayjsLocaleConfig";

import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import "../styles/global.css";
import { Loading } from "@/components/loading";

export default function () {
  const [fontsLoad] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
  });
  if (!fontsLoad) {
    return <Loading />;
  }
  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  );
}
