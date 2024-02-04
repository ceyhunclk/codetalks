import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './MessageModal.style';
import Modal from 'react-native-modal';
import Input from '../Input';
import Buttons from '../Buttons';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
const MessageModal = ({isVisible, modalClose, onSave}) => {
  const [text, setText] = useState(null);
  const handleSend = () => {
    if (text !== null) {
  onSave(text);

    }
  };
  return (
    <Modal
      swipeDirection={'down'}
      style={styles.container}
      isVisible={isVisible}
      onBackdropPress={modalClose}>
      <SafeAreaView style={styles.modalbase}>
        <Input placeholder="Mesajı Giriniz..." changeText={setText} />
        <Buttons text="Mesaj Kaydet" onPress={handleSend} />
      </SafeAreaView>
    </Modal>
  );
};
export default MessageModal;
