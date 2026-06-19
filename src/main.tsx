import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import { ExamplesGallery } from './ExamplesGallery'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <ExamplesGallery />
  </StrictMode>,
)
