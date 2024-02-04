import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import styles from './Rooms.style';
import FloatingButton from '../../components/FloatingButton';
import RoomModal from '../../components/roomModal';
import database from '@react-native-firebase/database';
import datafireBaseParse from '../../utils/datafireBaseParse';
import RoomComponent from '../../components/RoomComponent';
const Rooms = ({navigation}) => {
  [isModalVisible, setModalVisible] = useState(false);
  [loadData, setloadData] = useState([]);
  const ModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

const gotoMessages=(uid) => {
  navigation.navigate("Messages",{uid});
}

const renderData=(({item})=><RoomComponent onClick={gotoMessages} data={item}></RoomComponent>)
  useEffect(() => {
   database()
   .ref("Data/Rooms")
   .on("value",snapshot=>{
   const veri= datafireBaseParse(snapshot.val());
   setloadData(veri);
   })

  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList columnWrapperStyle={{ justifyContent: 'space-between',padding:10 }} numColumns={2} data={loadData} renderItem={renderData}/>
      <FloatingButton icon="playlist-add" onPress={ModalToggle} />
      <RoomModal
        isVisible={isModalVisible}
        modalClose={ModalToggle}
        handleModal={ModalToggle}
      />
    </SafeAreaView>
  );
};
export default Rooms;
