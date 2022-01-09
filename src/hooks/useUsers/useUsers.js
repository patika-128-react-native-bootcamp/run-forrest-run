import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

//TODO fonksiyon
export default function useFetchData() {
  const [userList, setUserList] = useState(null);
  const [usersError, setUsersError] = useState(null);
  const [usersLoading, setUsersLoading] = useState(true);

  function fetchUsers() {
    try {
      setUsersLoading(true);
      const usersReference = database().ref('userInfo');
      usersReference.on('value', snapshot => {
        const dataObject = snapshot.val();
        if (!!dataObject) {
          const parsedList = Object.keys(dataObject).map(key => ({
            id: key,            
            value: dataObject[key],
          }));
          setUserList(parsedList);
        }
        setUsersLoading(false);
      });
    } catch (error) {
      setUsersError(error);
    } finally {
      setUsersLoading(false);
    }

    // setUsersLoading(true);
    // const usersReference = database().ref('users/');
    // usersReference
    //   .once('value')
    //   .then(snapshot => {
    //     const dataObject = snapshot.val();
    //     setUserList(dataObject);
    //     setUsersLoading(false);
    //   })
    //   .catch(error => {
    //     setUsersLoading(false);
    //     setUsersError(error);
    //   });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    userList,
    usersError,
    usersLoading,
    fetchUsers,
  };
}
