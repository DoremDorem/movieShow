import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
const publisable_key=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!publisable_key){
  throw new Error("publisable key is not available")
}
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publisable_key}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>
)
