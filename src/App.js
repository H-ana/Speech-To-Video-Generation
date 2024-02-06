import './App.css';
import SelectSubject from "./pages/SelectSubject/SelectSubject"
import SpeakerInp from "./pages/SpeakerInp/SpeakerInp"
import Loader from './pages/Loader/Loader'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SelectSubject/>}/>
      <Route path='/spinput' element={<SpeakerInp/>}/>
      <Route path='/loader' element={<Loader/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
