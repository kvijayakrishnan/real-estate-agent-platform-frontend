import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Signup from './AuthComponent/Signup';
import Login from './AuthComponent/Login';
import Home from './AuthComponent/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
