import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { StateContextProvider } from './context/StateProvider.jsx'

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </StateContextProvider>,
)
