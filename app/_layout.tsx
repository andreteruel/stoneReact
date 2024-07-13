import { Stack } from "expo-router";
import IconCart from "@/components/IconCart";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={({ route }) => ({
      headerRight: () => (
        route.name !== 'Cart/index' && (
          <IconCart />
        )
      ),
      headerStyle:{
        backgroundColor: '#00CC2C'
      }
    })}
    >
      <Stack.Screen name="index" options={{ title:'Catalogo', headerTintColor:"#FFF" }} />
      <Stack.Screen name="Cart/index" options={{ title:'Carrinho', headerTintColor:"#FFF" }} />
    </Stack>
  );
}
