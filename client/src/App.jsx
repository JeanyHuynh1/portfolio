import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

import './App.css'
import NavBar from '../components/common/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <MainRouter />
    </Router>
  )
}

export default App