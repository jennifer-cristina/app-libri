import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";

import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";
import Listagem from "./src/telas/Listagem";
import Detalhes from "./src/telas/Detalhes";
import Editar from "./src/telas/Editar";
import Button from "./src/componentes/Button";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//       title="Go to DetailsScreen"
//       onPress={() => navigation.navigate('DetailsScreen')}
//       />
//     </View>
//   );
// }

// const DetailsScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//       title='Go to HomeScreen'
//       onPress={() => navigation.navigate('HomeScreen')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {

  const nome = 'SENAI - JANDIRA';

  return (

    // <NavigationContainer>
    //   <Stack.Navigator> 

    //     <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    //     <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>

    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>

      <Stack.Navigator>

        {/* <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{ title: 'Cadastro de livros' }}
        /> */}

        <Stack.Screen
          name='Listagem'
          component={Listagem}
          options={{ title: 'Listagem de livros' }}
        />

        <Stack.Screen
          name='Detalhes'
          component={Detalhes}
          options={{ title: 'Listagem de livros' }}
        />

        <Stack.Screen
          name='Editar'
          component={Editar}
          options={{ title: 'Listagem de livros' }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

}

const estilo = StyleSheet.create({
  container: {},
  titulo: {
    width: "100%",
    backgroundColor: "#F00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#FFF",
    fontWeight: "bold",
    padding: 16
  },
});

export default App;
