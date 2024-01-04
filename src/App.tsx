import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import Header_module from './components/header/header.module.scss';
import Events_module from './components/events/events.module.scss';
import { Footer } from './components/footer/footer';
import { HomePage } from './components/home-page/home-page';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
