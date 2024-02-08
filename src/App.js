import './App.css';
import Homepage from './pages/homepage/homepage';
import SelectSubject from "./pages/SelectSubject/SelectSubject"
import SpeakerInp from "./pages/SpeakerInp/SpeakerInp"
import Loader from './pages/Loader/Loader'
import Login from './pages/Login/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/selectsub' element={<SelectSubject/>}/>
      <Route path='/spinput' element={<SpeakerInp/>}/>
      <Route path='/loader' element={<Loader/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
