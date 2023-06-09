import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import webgazer from "webgazer/dist/webgazer.commonjs2";
import { useEffect } from 'react'

const Settings = () => {
    useEffect(() => {
    webgazer.setGazeListener(() => {}).begin();
    }, []);

    return (
    <div className="settings">
        
    </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  )
  
  root.render(
    <React.StrictMode>
      <Settings />
    </React.StrictMode>
  )