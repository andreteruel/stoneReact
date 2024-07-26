import IconCart from "@/components/IconCart";
import { Tabs } from "expo-router";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Tabs screenOptions={() => ({
      headerRight: () => (
          <IconCart />
      ),
      headerTintColor:"#FFF",
      headerStyle:{
        backgroundColor: '#00CC2C',
      },
      tabBarLabelStyle:{
        color:"#FFF",
        fontSize:14
      },
      tabBarStyle:{
        backgroundColor: '#00CC2C',
      }
    })} >
      <Tabs.Screen 
        name="catalog/index" 
        options={{ 
          title:'Catalogo', 
          tabBarIcon: ({focused}) => {
            return <Ionicons
              name={focused ? "bag-handle-sharp": "bag-handle-outline"}
              size={25}
              color="#FFF"
            />
          } 
        }}
      />
      <Tabs.Screen 
        name="favorite/index" 
        options={{ 
          title:'Favoritos',
          tabBarIcon: ({focused}) => {
            return <Ionicons
              name={focused ? "heart-sharp": "heart-outline"}
              size={25}
              color="#FFF"
            />
          } 
        }} 
      />
    </Tabs>
  );
}
