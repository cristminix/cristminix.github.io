const fs = require('fs-extra');
const path = require('path');
const app_config = require("./src/app_config.json")

console.log("Starting Theme Hooks");
console.log("Reading src/app_config.json");
console.log(app_config);
console.log(`Copyng template.html`);
fs.copySync(path.resolve(__dirname, `src/themes/${app_config.theme}/template.html`), './index.html');

const main_jsx_content = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import app_config from "./app_config.json"
import App from "./themes/${app_config.theme}/App"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`
console.log(`Modifyng src/main.jsx`);
fs.writeFileSync(path.resolve(__dirname, "src/main.jsx"), main_jsx_content);