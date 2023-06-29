import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home />} exact />
    <Route path='/About' element={<About />} exact />
    <Route path='/Terms' element={<Terms />} exact />
    <Route path='/Policy' element={<Policy />} exact />
    </Routes>
    </div>
  );
}

export default App;