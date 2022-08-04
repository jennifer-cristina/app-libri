import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Input from "../componentes/Input";
import Button from "../componentes/Button";

import COLORS from "../const/Colors";

const Cadastro = () => {

    const nome = 'TELA DE CADASTRO';
  
    return (

      <SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

          <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

          <View style={estilos.viewForm}>

            <Input label="Título" />
            <Input label="Descrição" />
            <Input label="Capa" />

            <Button title="CADASTRAR"/>

          </View>    
        </ScrollView>
      </SafeAreaView>
      
                  
    );
  }

  const estilos = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    scroll: {
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    textTitle: {
      color: COLORS.black,
      fontSize: 25,
      fontWeight: "bold",
    },
    viewForm: {
      marginVertical: 20,
    },
  }); 

  export default Cadastro;