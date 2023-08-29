import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/layout';
import Home from '../pages/home';
import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/web" element={<Home/>}/>
          <Route path="/game" element={<Home/>}/>
          <Route path="/application" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
