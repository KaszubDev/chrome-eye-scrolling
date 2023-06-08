import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
const webgazer = (window as any).webgazer
import { useEffect } from 'react'

const Popup = () => {

  return (
    <div className="popup">
      <p>Popup page</p>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
)