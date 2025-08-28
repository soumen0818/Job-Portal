import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import ProtectedRoute from "./components/protected-route";


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
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job-listing',
        element:(
           <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job/:id',
          element: (
          <ProtectedRoute>
            <JobApplicationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job-post',
         element: (
          <ProtectedRoute>
            <JobPost />
          </ProtectedRoute>
        ),
      },
      {
        path: '/all-job',
        element: (
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-job',
          element: (
          <ProtectedRoute>
            <MyJob />
          </ProtectedRoute>
        ),
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
