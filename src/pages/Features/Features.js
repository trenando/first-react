import React from 'react';
import { Route } from 'react-router-dom';
import { Buttons } from './Buttons/Buttons';
import { Tab } from './Tab/Tab';
import { Sublist } from './Sublist/Sublist';
import { Standart } from './Standart/Standart';

export function Features() {
    return (
        <React.Fragment>
            <Buttons />
            <Route path='/features/tab'>
                <Tab />
            </Route>
            <Route path='/features/sublist'>
                <Sublist />
            </Route>
            <Route path='/features/standart'>
                <Standart />
            </Route>
        </React.Fragment>
    )
}