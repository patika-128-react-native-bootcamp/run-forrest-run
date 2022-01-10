import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
//TODO
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
          setData(dataObject);
        }
        setDataLoading(false);
      });
    } catch (error) {
      setDataError(error);
    } finally {
      setDataLoading(false);
    }
  }

  return {
    data,
    dataError,
    dataLoading,
    fetchData,
  };
}
