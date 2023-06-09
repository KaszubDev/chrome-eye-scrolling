import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { useLocalStorage } from 'usehooks-ts'
import './styles.css'
import { WebgazerHandlerAction } from './types'

const Popup = () => {
  const [isActive, setIsActive] = useLocalStorage<boolean>("isActive", false)

  const call = (action: WebgazerHandlerAction) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0]
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          action,
          (response) => { console.log("result message:", response) }
        )
      }
    })
  }

  const changeWebGazerStatus = (action: WebgazerHandlerAction) => {
    call(action)
    switch (action as WebgazerHandlerAction) {
      case WebgazerHandlerAction.ENABLE:
        setIsActive(true)
        break;
      case WebgazerHandlerAction.DISABLE:
        setIsActive(false)
        break;
    }
  }

  return (
    <div className="popup">
      <span className='title'>Eye Scrolling</span>
      <button className='btn' onClick={() => changeWebGazerStatus(WebgazerHandlerAction.ENABLE)}>Start</button>
      <button className='btn' onClick={() => changeWebGazerStatus(WebgazerHandlerAction.DISABLE)}>Stop</button>
      <span className='status'>Status: {isActive ? 'ON' : 'OFF'}</span>
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