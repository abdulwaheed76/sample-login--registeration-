import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import DetailPage from './pages/detail';
function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/detail' element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
