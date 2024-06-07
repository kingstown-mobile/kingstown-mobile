import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerTitle: {
        backgroundColor: '#FFD105',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    turma: {
        marginTop: 20,
        height: 200,
        width: 300,
        borderRadius: 10,
        display: 'flex',
        borderWidth: 2
    },
    div1: {
        height: 98,
        backgroundColor: '#CDCDCD',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    div2: {
        backgroundColor: '#5922A0',
        height: 98,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: 'flex',
        alignItems: 'center',
        borderTopWidth: 2
    },
    img: {
        height: 100,
        width: 250,
        opacity: 0.7
    },
    contentTurma: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default styles;