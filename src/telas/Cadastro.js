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

    // ------ Validação dos dados de cadastro ------ //

    // State de erro de preenchimento 

    const [errors, setErrors] = React.useState({});

    // Função Handler que configura as mensagens de erro na State

    const handlerErrors = (errorMessage, input) => {

      setErrors((prevState) => ({...prevState, [input]:errorMessage}));

    }

    const validate = () => {

      let validate = true;

      if(!inputs.titulo) {
        validate = false;
        handlerErrors('Informe o título do livro!', 'titulo');
        // console.log('TITULO EM BRANCO');
      }

      if(!inputs.descricao) {
        validate = false;
        handlerErrors('Informe o descrição do livro!', 'descricao');
        // console.log('DESCRICAO EM BRANCO');
      }

      if(!inputs.capa) {
        validate = false;
        handlerErrors('Insira a capa do livro!', 'capa');
        // console.log('CAPA EM BRANCO');
      }


    }
  
    return (

      <SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

          <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

          <View style={estilos.viewForm}>

            <Input 
              label="Título"
              error={errors.titulo}
              onFocus={() => {handlerErrors(null, 'titulo')}}
              onChangeText={(text) => handlerOnChange(text, 'titulo')}
            />
            <Input 
              label="Descrição"
              error={errors.descricao}
              onFocus={() => {handlerErrors(null, 'descricao')}}
              onChangeText={(text) => handlerOnChange(text, 'descricao')}
            />
            <Input 
              label="Capa" 
              error={errors.capa}
              onFocus={() => {handlerErrors(null, 'capa')}}
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