import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import JobsProvider from './Provider/JobsProvider.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <JobsProvider>
        <RouterProvider router={router} />
      </JobsProvider>
    </AuthProvider>
  </StrictMode>,
)
