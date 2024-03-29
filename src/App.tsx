import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import Header_module from './components/header/header.module.scss';
import Events_module from './components/events/events.module.scss';
import { Footer } from './components/footer/footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/home-page/home-page';
import { CommunityPage } from './components/community-page/community-page';

function App() {
  return (    
    <BrowserRouter>
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/community" element={<CommunityPage />} />
            {/* Add other routes here */}
        </Routes>
        <Footer />
    </div> 
    </BrowserRouter>   
  );
  }

  export default App;