import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
//TODO fonksiyon
export default function useFetchData(reference) {
  const [data, setData] = useState(null);
  const [dataError, setDataError] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    try {
      setDataLoading(true);
      const dataReference = database().ref(reference);
      dataReference.on('value', snapshot => {
        const dataObject = snapshot.val();
        if (!!dataObject) {    
          // const parsedData = Object.keys(dataObject).map(key => ({
          //   ...dataObject[key]
          // }));
          setData(dataObject);
        }
        setDataLoading(false);
      });
    } catch (error) {
      setDataError(error);
    } finally {
      setDataLoading(false);
    }
    // // setDataLoading(true);
    // const dataReference = database().ref(reference);
    //  dataReference
    //   .once('value')
    //   .then(snapshot => {
    //     const dataObject = snapshot.val();
    //     const parsedData = Object.keys(dataObject).map(key => ({
    //       ...dataObject[key],
    //     }));
    //     setData(parsedData);
    //     setDataLoading(false);
    //   })
    //   .catch(error => {
    //     setDataLoading(false);
    //     setDataError(error);
    // //   });
  }

  return {
    data,
    dataError,
    dataLoading,
    fetchData,
  };
}
