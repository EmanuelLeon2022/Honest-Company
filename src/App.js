import './style.css';
import {Route, Routes} from "react-router-dom"
import Header from './components/Header';
import Directory from './components/Directory';
import Baby from './pages/Baby';
import Main from './components/Main';
import Allwipes from './pages/Allwipes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Directory/>
        <Routes>
            <Route path="/Baby" element={<Baby/>}/>
            <Route path='/Allwipes' element={<Allwipes/>} />
            <Route path='/' element={<Main/>}/>
            <Route path=''/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
