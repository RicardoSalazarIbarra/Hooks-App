import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExamplesGallery } from './ExamplesGallery'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExamplesGallery />
  </StrictMode>,
)
