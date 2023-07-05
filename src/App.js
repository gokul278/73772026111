import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import Check from './features/Check';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/check' element={<Check/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
