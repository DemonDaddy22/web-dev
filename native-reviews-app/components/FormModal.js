import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, ModalContent, SlideAnimation } from 'react-native-modals';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/GlobalStyles';

const FormModal = React.memo(({ modalOpen, setModalOpen }) => <Modal visible={modalOpen} onTouchOutside={() => setModalOpen(false)}
    modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}>
    <ModalContent style={styles.modal}>
        <MaterialIcons name='close' size={24} color='#f7f7f7' style={styles.closeButton} onPress={() => setModalOpen(false)} />
        
    </ModalContent>
</Modal>
);

const styles = StyleSheet.create({
    closeButton: {
        marginTop: 12,
        alignSelf: 'center'
    },
    modal: {
        minHeight: 200,
        minWidth: '80%',
        backgroundColor: '#373737'
    }
});

export default FormModal;