import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

export default function useFetchData(reference) {
  const [data, setData] = useState(null);
  const [dataError, setDataError] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  async function fetchData() {
    setDataLoading(true);
    const dataReference = database().ref(reference);
    dataReference
      .once('value')
      .then(snapshot => {
        const dataObject = snapshot.val();
        const parsedData = Object.keys(dataObject).map(key => ({
          id: key,
          ...dataObject[key],
        }));
        setData(parsedData);
        setDataLoading(false);
      })
      .catch(error => {
        setDataError(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    dataError,
    dataLoading,
    fetchData,
  };
}
