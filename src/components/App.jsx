import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import { useLazyRefreshUserQuery } from 'redux/slices/usersAPISlice';

import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './ProtectedRoute';
import { UserPetsList } from './UserPetsList/UserPetsList';
// import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const [refreshUser, { isLoading: isRefreshingUserData }] =
    useLazyRefreshUserQuery();

  useEffect(() => {
    const { token } = store.getState().auth;

    token && refreshUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {isRefreshingUserData ? (
          <Route index element={<p>Retrieving data...</p>} />
        ) : (
          <>
            {/* HOMEPAGE */}
            <Route
              index
              element={<RestrictedRoute redirectTo="/" component={<></>} />}
            />

            {/* ⏬ WRITE your PAGES below this comment ⏬*/}
          </>
        )}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
