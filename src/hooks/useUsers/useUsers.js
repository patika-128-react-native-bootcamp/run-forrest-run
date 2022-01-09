import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

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
