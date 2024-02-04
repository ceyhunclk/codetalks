import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import styles from './Messages.style';
import MessageModal from '../../components/MessageModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import MessagesParse from '../../utils/MessagesParse';
import MessageList from '../../components/MessageList';
const Messages = ({route}) => {
  [messageModal, setMessageModal] = useState(false);
  [messageData, setmessageData] = useState(false);

  useEffect(() => {
    database()
      .ref('Data/Messages')
      .on('value', snapshot => {
        if(snapshot.val()!=null)
        setmessageData(MessagesParse(route.params.uid, snapshot.val()));
      });
  }, []);
  const toogleMessages = () => {
    setMessageModal(!messageModal);
  };
  const messageSave = text => {
    const uid = route.params.uid;
    const name = auth().currentUser.email.split('@');
    console.log(name[0]);

    database().ref('Data/Messages').push({
    date:new Date().toISOString(),
      message: text,
      room: uid,
      senderName: name,
    });
    showMessage({
      message: 'Mesaj Kaydedildi.',
      type: 'success',
    });
    toogleMessages();
  };
const removePress=async(uid) => {

        console.log(uid);
        await database().ref('/Data/Messages/'+uid).remove();
      
}

  const pMessage = ({item}) => <MessageList onPress={removePress} data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={messageData} renderItem={pMessage} />
      <FloatingButton icon="post-add" onPress={toogleMessages}></FloatingButton>
      <MessageModal
        onSave={messageSave}
        isVisible={messageModal}
        modalClose={toogleMessages}
      />
    </SafeAreaView>
  );
};

export default Messages;
