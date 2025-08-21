import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import React from 'react'
import './App.css'
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from "./layout/app-layout";
import Landing from "./pages/Landing";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import JobApplicationPage from "./pages/job-application";
import JobPost from "./pages/job-post";
import SavedJob from "./pages/all-job";
import MyJob from "./pages/my-job";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/job/:id',
        element: <JobApplicationPage />
      },
      {
        path: '/post-job',
        element: <JobPost />
      },
      {
        path: '/saved-job',
        element: <SavedJob />
      },
      {
        path: '/my-job',
        element: <MyJob />
      },
    ]
  }
])

function App() {

  return(
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  ); 
}

export default App
