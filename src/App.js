import React from 'react';
import { Header } from './Header/Header';
import { Router } from './Router';


function App() {
    return (
        <div className="section">
            <div className="header">
                <Header />
            </div>
            <Router />
        </div>
    );
}

export default App;
