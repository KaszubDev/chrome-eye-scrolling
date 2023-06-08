import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import webgazer from "webgazer/dist/webgazer.commonjs2";

import { useEffect } from 'react'

const Settings = () => {
    useEffect(() => {
    function scroll(amountToScroll: number){
        //amount to scroll is negative to scroll up
        window.scrollBy(0 , amountToScroll)
    }
    
    const handleScroll = (data) => {
        const { innerHeight, pageYOffset } = window;
        const horizontalCenter = innerHeight / 2;

        if (data?.y && data?.y > horizontalCenter) {
        scroll(100)
        }

        if (data?.y && data?.y < horizontalCenter) {
        scroll(-100)
        }
        
    };

    webgazer
        .setGazeListener(handleScroll)
        .begin();

    }, []);

    return (
    <div className="settings">
        <div className='red'></div>
        <div className='yellow'></div>
        <div className='blue'></div>
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