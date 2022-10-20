import React, { useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Input from "../componentes/Input";
import Button from "../componentes/Button";
import apiLivraria from "../service/apiLivraria";
import COLORS from "../const/Colors";

const Editar = ({ route, navigation }) => {

    // Captura de dados com uso de States, armazenar os dados digitados na tela

    
    const {codLivro} = route.params;
    
    const [inputs, setInputs] = React.useState({
      titulo: '',
      descricao: '',
      capa: '',
    });
    
    useEffect(() => {

      apiLivraria.get(`/listarLivros/${codLivro}`)

      .then((data) => {
          setInputs(data.data[0])
      })

    }, [])

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
      }

      if(!inputs.descricao) {
        validate = false;
        handlerErrors('Informe o descrição do livro!', 'descricao');
      }

      if(!inputs.capa) {
        validate = false;
        handlerErrors('Insira a capa do livro!', 'capa');
      }

      if(validate){
        editar()
        console.log('cadastrouououou')
      }


    }

    const editar = () => {
      try{

        const response = apiLivraria.put('/alterarLivros', 
        {

          titulo: inputs.titulo,
          descricao: inputs.descricao,
          imagem: inputs.capa,
          codLivro: inputs.codLivro

        })

        navigation.goBack();

      } catch (error) {

      }
    }

    return (

      <SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

          <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

          <View style={estilos.viewForm}>

            <Input 
              label="Título"
              iconName="book-outline"
              error={errors.titulo}
              onFocus={() => {handlerErrors(null, 'titulo')}}
              value={inputs.titulo}
              onChangeText={(text) => handlerOnChange(text, 'titulo')}
            />
            <Input 
              label="Descrição"
              iconName="card-text-outline"
              error={errors.descricao}
              onFocus={() => {handlerErrors(null, 'descricao')}}
              value={inputs.descricao}
              onChangeText={(text) => handlerOnChange(text, 'descricao')}
            />
            <Input 
              label="Capa" 
              iconName="image-outline"
              error={errors.capa}
              onFocus={() => {handlerErrors(null, 'capa')}}
              value={inputs.imagem}
              onChangeText={(text) => handlerOnChange(text, 'capa')}
            />

            <Button 
              title="EDITAR"
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

  export default Editar;