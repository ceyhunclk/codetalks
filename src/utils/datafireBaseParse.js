const datafireBaseParse = data => {
  const key = Object.keys(data);

  let newData = [];
  key.forEach(element => {
    let add = {
      uid: element,
      ...data[element],
    };
    newData.push(add);
  });

  return newData;
};
export default datafireBaseParse;
