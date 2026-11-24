import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import App from './App'
import { mockLoads } from './data'
import { Catalog } from './pages/Catalog'
import { Feed, LoadDetail } from './pages/Feed'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Catalog loads={mockLoads} /> },
      { path: 'feed/:id?', element: <Feed loads={mockLoads} /> },
      { path: 'loads/:id', element: <LoadDetail loads={mockLoads} /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
