
import React from 'react'
import ReactDOM from 'react-dom/client'
import app_config from "./app_config.json"
import App from "./themes/localtonet-admin/App"
import "./input.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
