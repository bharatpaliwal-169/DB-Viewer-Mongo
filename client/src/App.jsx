import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components'
import AddPost from './components/AddPost'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/test" element={<AddPost/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;