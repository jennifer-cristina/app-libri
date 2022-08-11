import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Input from "../componentes/Input";
import Button from "../componentes/Button";

import COLORS from "../const/Colors";

const Cadastro = () => {

    // Captura de dados com uso de States, armazenar os dados digitados na tela

    const [inputs, setInputs] = React.useState({
      titulo: '',
      descricao: '',
      capa: '',
    });

    // Função que manipula a entrada de dados na State no metódo onChangeText

    const handlerOnChange = (text, input) => {

      setInputs((prevState) => (

        // console.log(input + ' ' + text)
        
        // Injeção de dados na State
        console.log(prevState),
        ({...prevState, [input]:text})
        
      ));
    }

    // Validação dos dados de cadastro

    const validate = () => {

      let validate = true;

      if(!inputs.titulo) {
        validate = false;
        console.log('TITULO EM BRANCO');
      }

      if(!inputs.descricao) {
        validate = false;
        console.log('DESCRICAO EM BRANCO');
      }

      if(!inputs.capa) {
        validate = false;
        console.log('CAPA EM BRANCO');
      }

    }
  
    return (

      <SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

          <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

          <View style={estilos.viewForm}>

            <Input 
              label="Título"
              onChangeText={(text) => handlerOnChange(text, 'titulo')}
            />
            <Input 
              label="Descrição"
              onChangeText={(text) => handlerOnChange(text, 'descricao')}
            />
            <Input 
              label="Capa" 
              onChangeText={(text) => handlerOnChange(text, 'capa')}
            />

            <Button 
              title="CADASTRAR"
              onPress={validate}
            />

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