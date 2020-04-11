import React from 'react';
import { Header } from './Header/Header';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <div className="section">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="header">
                    <Header />
                </div>
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
