import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { StateContextProvider } from './context/StateProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
)
