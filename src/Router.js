import React from 'react';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Features } from './pages/Features/Features';
import { Pricing } from './pages/Pricing/Pricing';
import { Reviews } from './pages/Reviews/Reviews';
import { Home } from './pages/Home/Home';
import { Route } from 'react-router-dom';

export function Router() {
    return (
        <React.Fragment>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/features">
                <Features />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/pricing">
                <Pricing />
            </Route>
            <Route path="/reviews">
                <Reviews />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </React.Fragment>
    );
}