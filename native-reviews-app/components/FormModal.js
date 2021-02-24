import React from 'react';
import { Button, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Modal, ModalContent, SlideAnimation } from 'react-native-modals';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { globalStyles } from '../styles/GlobalStyles';

const FormModal = React.memo(({ modalOpen, setModalOpen, addReview }) => <Modal visible={modalOpen} onTouchOutside={() => setModalOpen(false)}
    modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}>
    <ModalContent style={{ backgroundColor: '#373737' }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modal}>
                <MaterialIcons name='close' size={24} color='#f7f7f7' style={styles.closeButton} onPress={() => setModalOpen(false)} />
                <View style={{ ...globalStyles.container, backgroundColor: 'transparent' }}>
                    <Formik initialValues={{ title: '', body: '', rating: 0 }} onSubmit={values => addReview(values)}>
                        {props => <View>
                            <TextInput style={globalStyles.input} placeholderTextColor='#777' placeholder='Review Title' value={props.values.title} onChangeText={props.handleChange('title')} />
                            <TextInput multiline style={globalStyles.input} placeholderTextColor='#777' placeholder='Review Description' value={props.values.body} onChangeText={props.handleChange('body')} />
                            <TextInput style={globalStyles.input} placeholderTextColor='#777' placeholder='Rating (1-5)' keyboardType='numeric' value={props.values.rating} onChangeText={props.handleChange('rating')} />
                            <Button title='SUBMIT' color='#e91d54' onPress={props.handleSubmit} />
                        </View>}
                    </Formik>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </ModalContent>
</Modal>
);

const styles = StyleSheet.create({
    closeButton: {
        marginTop: 12,
        alignSelf: 'center'
    },
    modal: {
        minHeight: 300,
        minWidth: '80%',
        backgroundColor: '#373737'
    }
});

export default FormModal;