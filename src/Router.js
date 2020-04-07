import React from 'react';
import { About } from './pages/About/About';
import { ContactContainer } from './pages/Contact/ContactContainer';
import { Features } from './pages/Features/Features';
import { Pricing } from './pages/Pricing/Pricing';
import { Reviews } from './pages/Reviews/Reviews';
import { Home } from './pages/Home/Home';
import { Footer } from './pages/Footer/Footer';
import { Route } from 'react-router-dom';

export function Router() {
    return (
        <React.Fragment>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/features">
                <Features />
                <Footer />
            </Route>
            <Route path="/about">
                <About />
                <Footer />
            </Route>
            <Route path="/pricing">
                <Pricing />
                <Footer />
            </Route>
            <Route path="/reviews">
                <Reviews />
                <Footer />
            </Route>
            <Route path="/contact">
                <ContactContainer />
                <Footer />
            </Route>
        </React.Fragment>
    );
}