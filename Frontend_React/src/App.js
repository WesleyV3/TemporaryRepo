import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Home from './pages/Home'
import DigitalProgramming from './pages/DigitalProgramming'
import ResumeForm from './pages/ResumeForm'
import Footer from './pages/components/FooterComponent/Footer';
import Successful from './pages/Successful'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <div id="menu_box">
            <div id="name_box">
              <p>Kaylea Gray</p>
              <div class="menu-wrapper">
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="DigitalProgramming">Digital Programming</NavLink></li>
                  <li><NavLink to="ResumeForm">Workplace Writing Services</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div id='contentWrapper'>
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path='DigitalProgramming' element={<DigitalProgramming />} />
              <Route path='ResumeForm' element={<ResumeForm />} />
              <Route path='Successful' element={<Successful />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
