import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/auth/SignIn';
import Dashboard from '../pages/dashboard/Dashboard';
import ManageUser from '../pages/manageUser/ManageUser';

const NotFound = lazy(() => import('../pages/NotFound'));

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />

        <Route path='/dashboard'>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/manage-user'>
          <Route index element={<ManageUser />} />
        </Route>



      </Routes>
    </>
  );
};

export default AppRouter;
