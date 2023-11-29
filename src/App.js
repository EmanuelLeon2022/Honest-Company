import './style.css';
import {Route, Routes} from "react-router-dom"
import Header from './components/Header';
import Directory from './components/Directory';
import Baby from './pages/Baby';
import Clean from './components/Clean';
import Gifts from './components/Gifts';
import Main from './components/Main';
import Allwipes from './pages/Allwipes';
import Makeup from './components/Makeup';
import Skin from './components/Skin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Directory/>
        <Routes>
          <Route path='/Clean' element={<Clean/>}/>
            <Route path='/Makeup' element={<Makeup/>} />
            <Route path='/Gifts' element={<Gifts/>}/>
            <Route path='/Baby' element={<Baby/>}/>
            <Route path='/Allwipes' element={<Allwipes/>} />
            <Route path='/' element={<Main/>}/>
            <Route path='/Skin' element={<Skin/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
