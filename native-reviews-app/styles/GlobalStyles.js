import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        backgroundColor: '#212121'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRegular: {
        fontFamily: 'Inter_400Regular'
    },
    textBold: {
        fontFamily: 'Inter_600SemiBold'
    },
    textExtraBold: {
        fontFamily: 'Inter_800ExtraBold'
    },
    margin16: {
        margin: 16
    },
    padding16: {
        padding: 16
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        marginBottom: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 4,
        color: '#f7f7f7'
    }
});