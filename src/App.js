import React from 'react';
import Register from './pages/register';
import Login from './pages/login';
import MainLayout from './components/layout/main';
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import { ROUTE_CONSTANTS } from './core/utils/constants';
import './App.css';

function App() {

  return (
    <RouterProvider
      router = {
        createBrowserRouter(
          createRoutesFromElements(
            <Route path = '/' element = {<MainLayout />}>
              <Route path = {ROUTE_CONSTANTS.REGISTER} element = {<Register />}/>
              <Route path = {ROUTE_CONSTANTS.LOGIN} element = {<Login />}/>
            </Route>
          )
        )
      }
    />
  );
}

export default App;
