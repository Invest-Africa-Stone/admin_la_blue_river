import React from 'react';
import { NavigationPathsEnum } from "@utilities/enums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  NotFound,
  Signin,
  Dashboard,
  Message,
  Account,
  Collaborators,
  Settings,
  Projets
} from '@pages';
  
export const Navigations: React.FC = () => {
  
  const router = createBrowserRouter([
    {
      path: NavigationPathsEnum.SIGNIN,
      element: <Signin />,
    },
    {
      path: NavigationPathsEnum.DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: NavigationPathsEnum.MESSAGE,
      element: <Message />,
    },
    {
      path: NavigationPathsEnum.ACCOUNT,
      element: <Account />,
    },
    {
      path: NavigationPathsEnum.COLLABS,
      element: <Collaborators />,
    },
    {
      path: NavigationPathsEnum.PROJECTS,
      element: <Projets />,
    },
    {
      path: NavigationPathsEnum.SETTINGS,
      element: <Settings />,
    },
    
    {
      path: NavigationPathsEnum.NOT_FOUND,
      element: <NotFound />,
    },
  ]);

  return (
    <RouterProvider 
      data-testid="navigations"
      router={router} 
    />
  );
};