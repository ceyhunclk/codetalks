const MessagesParse = (uid, data=[]) => {


  const key = Object.keys(data);
  let newData = [];

  key.forEach(element => {
    if (data[element]['room'] == uid) {
      let dt = {
        uid:element,
        ...data[element],
      };
      newData.push(dt);
    }
  });
  return newData;
};

export default MessagesParse;
