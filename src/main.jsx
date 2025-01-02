import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import './index.css'
import Calendar from './components/Calendar'




function App(){
  return(
      <Calendar />
      
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
