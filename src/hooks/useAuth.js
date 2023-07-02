// import { useSelector } from 'react-redux';

// import  authSelectors  from '../redux/auth/authSelectors';

// export const useAuth = () => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
//   const user = useSelector(authSelectors.getUserName);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };
import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};