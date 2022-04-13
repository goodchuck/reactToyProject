import logo from './logo.svg';
import './App.css';
import './CSS/index.css'
import Splash from './Pages/splash';
import SideBar from './Pages/sidebar';
import { Route, Routes } from 'react-router-dom';
import Layout from './Pages/layout';
import Web from './Pages/Web';
import WebPost from './Pages/WebPost';
import Home from './Pages/Home';
import Ajax from './Pages/Ajax';

function App() {
  return (
    <>
      <h1>test</h1>

    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/layout" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/deviceInfo" element={<Home />} />
      <Route path="web/*" element={<Home />}>
        <Route path=":id" element={<WebPost />} />
      </Route>
      <Route path="/ajax" element={<Home />}/>
    </Routes>
    </>
    
  );
}

export default App;
