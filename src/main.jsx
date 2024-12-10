import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react';


createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="https://telegram-user-ashen.vercel.app/">
  <StrictMode>
    <App />
  </StrictMode>,
  </TonConnectUIProvider>
)
