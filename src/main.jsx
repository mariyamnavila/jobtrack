import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import JobsProvider from './Provider/JobsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobsProvider>
      <RouterProvider router={router} />
    </JobsProvider>
  </StrictMode>,
)
