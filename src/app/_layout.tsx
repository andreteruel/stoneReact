import { Stack } from "expo-router";

export default function CatalogLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown:false }} />
      <Stack.Screen name="tabs" options={{ headerShown:false }}/>
      <Stack.Screen name="cart/index" options={{ title:'Carrinho', headerTintColor:"#FFF", headerStyle:{backgroundColor:"#00CC2C"} }} />
    </Stack>
  );
}
