import { StyleSheet } from "react-native";


const css = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        margin: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItens: 'center',
        justifyContent: 'space-around',
    },

    titleAdd: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        alignContent: 'center',
        textTransform: "uppercase",
    },
    buttonProsseguir: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'center',
        width: "40%",
        height: "10%",
        top: "40%",
    },

    buttonAdd: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'center',
        width: "35%",
        height: "10%",
        top: "150%",
    },

    buttonRemove: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 15,
        justifyContent: 'center',
        width: "35%",
        height: "10%",
        top: "150%",
        borderRadius: 8,
    },

    containerOperacao: {
        width: "100%",
        height: "100%",
        flexDirection: 'column',
        backgroundColor: 'w',
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoAtualizar: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderTopLeftRadius: '15%',
        borderTopRightRadius: '15%',
        justifyContent: 'center',
        width: "100%",
        height: 100,
        position: 'absolute',
        bottom: 0,
    },

    textInputQuantidade: {
        alignItems: 'center',
        backgroundColor: '#bebebe',
        width: "80%",
        height: 60,
        padding: 15,
        textAlign:"center",
    },

    textPrincipal: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
    },

    containerTextPrincipal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 150,
        position: 'absolute',
        top: 0,
        backgroundColor: 'black',
        fontSize: 20,
    
    },


});

export { css };