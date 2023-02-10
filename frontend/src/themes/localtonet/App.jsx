import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Header from './components/Header'
// import Container from './components/Container'
// import './styles/tiny-slider.css'
import './styles/line.css'
import './styles/icons.css'
import './styles/tailwind.min.css'
import './styles/min-widget.css'
import './styles/max-widget.css'
import './styles/message-preview.css'
import './styles/homepage.css'

import HomePage from './HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app-instance" className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
      <HomePage/>
    </div>
  )
}

export default App