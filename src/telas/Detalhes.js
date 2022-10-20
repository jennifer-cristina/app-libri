import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import apiLivraria from '../service/apiLivraria';
import capaLivro150 from '../assets/livros/lor150.png';
import COLORS from '../const/Colors';

const Detalhes = ({ route, navigation }) => {

    const { codLivro } = route.params;

    const [livro, setLivro] = useState({
        codLivro: '',
        titulo: '',
        descricao: '',
        imagem: ''
    })

    useEffect(() => {

        apiLivraria.get(`/listarLivros/${codLivro}`)

            .then((data) => {

                setLivro(data.data[0])

            }
            )
    }
    )

    const deletar = (cod) => {
        try {

            apiLivraria.delete(`/excluirLivros/${cod}`)
            navigation.goBack()

        } catch (error) {

        }
    }

    return (

        <ScrollView>

            <View style={styles.container}>

                <View style={styles.post}>

                    <Image style={styles.image} source={capaLivro150} />

                    <Text style={styles.title}>{livro.titulo}</Text>
                    <Text style={styles.description}>{livro.descricao}</Text>

                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: COLORS.darkBlue }]}
                        onPress={() => {navigation.navigate('Editar', { codLivro: livro.codLivro })}}
                    >

                        <Text style={styles.textButton}>EDITAR</Text>

                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.button, { backgroundColor: COLORS.red }]}
                    onPress={() => deletar(livro.codLivro)}

                    >

                        <Text style={styles.textButton}>EXCLUIR</Text>

                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    },
    post: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: COLORS.gray,
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 5
    },
    image: {
        borderRadius: 5,
        marginVertical: 16,
        marginLeft: 16
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        width: '100%',
        textAlign: 'justify',
        fontSize: 16
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    button: {
        width: '20%',
        marginHorizontal: 10,
        // backgroundColor: COLORS.darkBlue,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10
    },
    textButton: {
        padding: 10,
        textAlign: 'center',

    }
})
export default Detalhes;