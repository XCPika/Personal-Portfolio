import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.scss';
import Layout from '../pages/layout';
import Home from '../pages/home';
import Game from "../pages/game";
import Web from "../pages/web";
import Application from "../pages/application";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/web" element={<Web/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/application" element={<Application/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
