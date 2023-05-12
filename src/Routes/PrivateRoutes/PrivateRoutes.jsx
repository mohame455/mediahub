import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import  NavPage  from '../../Pages/NavPage/NavPage';


const PrivateRoute = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
  
  return accessToken ? (
    <div className='height_100vh'>
      <NavPage/>
      <Outlet />
    </div>
  ) : (
    <Navigate to='/' />
  );
};
PrivateRoute.displayName = 'PrivateRoute';
export default PrivateRoute;