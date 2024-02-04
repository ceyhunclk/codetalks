import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './RoomModal.style';
import Modal from 'react-native-modal';
import Input from '../Input';
import Buttons from '../Buttons';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
const RoomModal = ({isVisible, modalClose, handleModal}) => {
  const [text, setText] = useState(null);
  const handleSend = async () => {
    if (text !== null) {
      database().ref('Data/Rooms').push({
        roomName: text,
      });
      showMessage({
        message: 'Oda Kaydedildi.',
        type: 'success',
      });
      handleModal();
    }
  };
  return (
    <Modal
      swipeDirection={'down'}
      style={styles.container}
      isVisible={isVisible}
      onBackdropPress={modalClose}>
      <SafeAreaView style={styles.modalbase}>
        <Input placeholder="Oda Adını Giriniz..." changeText={setText} />
        <Buttons text="Odayı Kaydet" onPress={handleSend} />
      </SafeAreaView>
    </Modal>
  );
};
export default RoomModal;
