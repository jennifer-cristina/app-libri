import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";

import apiLivraria from "../service/apiLivraria";
import capaLivro150 from "../assets/livros/lor150.png"
import COLORS from "../const/Colors";

const Listagem = ({ navigation }) => {

    const [livros, setLivros] = useState([]);

    useEffect(() => {

        apiLivraria.get('/listarLivros')

            .then((data) => {
                setLivros(data.data);
            })

    }, []);

    return (

        <ScrollView>
            <View style={estilos.container}>

                {
                    livros.map(item => (
                        <TouchableOpacity
                            key={item.codLivro}
                            style={estilos.post}
                            onPress={() => navigation.navigate('Detalhes', { codLivro: item.codLivro })}
                        >

                            <View>
                                <Image
                                    style={estilos.imagem}
                                    source={capaLivro150}
                                />
                                <Text style={estilos.titulo}>{item.titulo}</Text>
                            </View>

                        </TouchableOpacity>
                    ))
                }

            </View>
        </ScrollView>

    )

}

const estilos = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    post: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: COLORS.gray,
        padding: 15,
        marginVertical: 2,
        borderRadius: 5,
        elevation: 5
    },
    imagem: {
        borderRadius: 5,
        marginVertical: 16,
        marginLeft: 16
    },
    titulo: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Listagem;