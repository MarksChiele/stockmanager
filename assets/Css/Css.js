import { StyleSheet } from "react-native";


const css = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    imagemHomecontainer: {
        width: "0%",
        height: "55%",
        flexDirection: 'row',
        justifyContent: 'space-between',


    },

    titleAdd: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        alignContent: 'center',
        textTransform: "uppercase",
    },
   
    buttonAdd: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'center',
        width: "45%",
        height: "10%",
        top: "60%",

    },

    buttonRemove: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'center',
        width: "45%",
        height: "10%",
        top: "60%",
      
    },

    buttonProsseguir: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'center',
        width: "40%",
        height: "10%",
        top: "80%",
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
        textAlign: "center",
        fontSize: 20,
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

    titleOpSoma: {
        color: "#008000",
        fontSize: 40,
        fontWeight: "bold",
        alignContent: 'center',
        textTransform: "uppercase",
        top: -150,
    },

    titleOpSub: {
        color: "#ff0000",
        fontSize: 40,
        fontWeight: "bold",
        alignContent: 'center',
        textTransform: "uppercase",
        top: -150,
    },
    containerTextOp: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 50,
        top: -150,
        fontSize: 20,
    },

    containerAoitem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        height: 50,
        top: 50,
        fontSize: 20,

    },

    textAoitem: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },

    textitem:{
        color: "#000000",
        fontSize: 25,
        fontWeight: "bold",
        textTransform: "uppercase",
        top:50,

    },
});

export { css };